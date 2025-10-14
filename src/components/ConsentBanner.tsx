"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "dmconte-consent";

type ConsentState = {
  analytics: boolean;
  translator: boolean;
};

export function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    analytics: false,
    translator: false,
  });

  useEffect(() => {
    const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (!raw) {
      setOpen(true);
      return;
    }
    try {
      const parsed = JSON.parse(raw) as ConsentState;
      setConsent(parsed);
    } catch {
      setOpen(true);
    }
  }, []);

  function saveConsent(next: ConsentState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setConsent(next);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Configuración de privacidad"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "grid",
        placeItems: "end center",
        padding: "1rem",
      }}>
      <div style={{
        background: "white",
        borderRadius: 12,
        padding: "1rem",
        width: "min(720px, 100%)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      }}>
        <h2 style={{ marginTop: 0 }}>Configuración de privacidad</h2>
        <p>
          Este sitio usa tecnologías de terceros para mejorar servicios y mostrar traducciones.
          Puede cambiar su consentimiento en cualquier momento.
        </p>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <label>
            <input
              type="checkbox"
              checked={consent.analytics}
              onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
            />
            Analytics
          </label>
          <label>
            <input
              type="checkbox"
              checked={consent.translator}
              onChange={(e) => setConsent({ ...consent, translator: e.target.checked })}
            />
            Traductor de páginas web
          </label>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
          <button onClick={() => saveConsent(consent)}>Guardar configuración</button>
          <button onClick={() => saveConsent({ analytics: false, translator: false })}>Rechazo</button>
          <button onClick={() => saveConsent({ analytics: true, translator: true })}>Acepto</button>
        </div>
      </div>
    </div>
  );
}


