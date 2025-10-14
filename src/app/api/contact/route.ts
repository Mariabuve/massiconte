import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "dr.conte.massimiliano@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "no-reply@drmconte.site";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let name = "";
    let email = "";
    let message = "";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      name = String(body.name || "").trim();
      email = String(body.email || "").trim();
      message = String(body.message || "").trim();
    } else {
      const form = await request.formData();
      name = String(form.get("name") || "").trim();
      email = String(form.get("email") || "").trim();
      message = String(form.get("message") || "").trim();
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      // In dev without API key, simulate success
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

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      html,
      reply_to: email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("/api/contact error", error);
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }
}


