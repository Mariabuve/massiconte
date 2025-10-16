"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("send-failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} aria-describedby="form-desc">
        <p id="form-desc">
          Envíame un mensaje y te responderé lo antes posible.
        </p>
        <label>
          Nombre*
          <input name="name" required aria-required="true" />
        </label>
        <label>
          Email*
          <input type="email" name="email" required aria-required="true" />
        </label>
        <label>
          Mensaje*
          <textarea name="message" required aria-required="true" rows={5} />
        </label>
        {/* Honeypot field (hidden from users) */}
        <div style={{ position: "absolute", left: -99999, width: 1, height: 1, overflow: "hidden" }} aria-hidden>
          <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
        </div>
        <label>
          <input type="checkbox" name="consent" required aria-required="true" />
          Acepto el tratamiento de mis datos para establecer contacto.*
        </label>
        <button type="submit" disabled={submitting} aria-busy={submitting}>
          {submitting ? "Enviando…" : "Enviar"}
        </button>
        {status === "success" && <p role="status">¡Gracias por tu mensaje!</p>}
        {status === "error" && (
          <p role="status">Hubo un error al enviar. Inténtalo de nuevo.</p>
        )}
      </form>
    </main>
  );
}


