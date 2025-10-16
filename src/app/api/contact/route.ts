import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "dr.conte.massimiliano@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "no-reply@drmconte.site";

// Simple in-memory rate limiter (per-IP, per 60s)
const requestsByIp = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const rec = requestsByIp.get(ip);
  if (!rec || now - rec.ts > WINDOW_MS) {
    requestsByIp.set(ip, { count: 1, ts: now });
    return true;
  }
  if (rec.count >= MAX_REQUESTS) return false;
  rec.count += 1;
  return true;
}

function sanitize(input: string, max = 2000): string {
  return input.replace(/[\u0000-\u001F\u007F]/g, "").slice(0, max).trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    // Basic origin check (best-effort)
    const referer = request.headers.get("referer") || "";
    try {
      if (referer) {
        const url = new URL(referer);
        const allowedHosts = new Set([
          "localhost:3000",
          "localhost:3001",
          "www.drmassimilianoconte.com",
          "drmassimilianoconte.com",
        ]);
        if (!allowedHosts.has(`${url.host}`)) {
          return NextResponse.json({ error: "Origen no permitido" }, { status: 403 });
        }
      }
    } catch {
      // ignore malformed referer
    }

    // Rate limit by IP
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: "Demasiadas solicitudes. Inténtelo más tarde." }, { status: 429 });
    }

    const contentType = request.headers.get("content-type") || "";
    let name = "";
    let email = "";
    let message = "";
    let honeypot = "";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      name = sanitize(String(body.name || ""), 200);
      email = sanitize(String(body.email || ""), 320);
      message = sanitize(String(body.message || ""));
      honeypot = sanitize(String(body.website || ""), 64);
    } else {
      const form = await request.formData();
      name = sanitize(String(form.get("name") || ""), 200);
      email = sanitize(String(form.get("email") || ""), 320);
      message = sanitize(String(form.get("message") || ""));
      honeypot = sanitize(String(form.get("website") || ""), 64);
    }

    // Honeypot traps simple bots
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message || !isValidEmail(email)) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // In dev without API key, simulate success without instantiating Resend
      return NextResponse.json({ ok: true, simulated: true });
    }

    const subject = `Nuevo mensaje de contacto: ${name}`;
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial">
        <h2>Contacto web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p style="white-space: pre-line">${message}</p>
      </div>
    `;

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      html,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("/api/contact error", error);
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }
}


