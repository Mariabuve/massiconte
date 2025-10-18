"use client";

import Link from "next/link";
import { useState } from "react";
import { GoogleTranslate } from "./GoogleTranslate";

export function Header() {
  const [moreOpen, setMoreOpen] = useState(false);
  return (
    <header style={{
      borderBottom: "1px solid var(--border)", position: "sticky", top: 0,
      background: "var(--panel)", zIndex: 50, backdropFilter: "saturate(180%) blur(8px)",
    }}>
      <nav className="container" style={{
        padding: "10px 12px", display: "flex", 
        justifyContent: "space-between", alignItems: "center",
        gap: "0.5rem"
      }}>
        <Link href="/" style={{ fontWeight: 800, letterSpacing: "-0.01em", fontSize: "clamp(14px, 4vw, 16px)" }}>
          Dr. Massimiliano Conte
        </Link>
        <div style={{ 
          display: "flex", 
          gap: "clamp(0.25rem, 2vw, 0.75rem)", 
          alignItems: "center",
          fontSize: "clamp(12px, 3.5vw, 14px)",
          flexWrap: "wrap"
        }} aria-label="Navegación principal">
          <Link href="/">Inicio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contacto</Link>
          <GoogleTranslate />
          <div style={{ position: "relative" }}>
            <button onClick={() => setMoreOpen((v) => !v)} aria-expanded={moreOpen} aria-haspopup="menu" style={{
              padding: "4px 8px", borderRadius: 8, border: "1px solid var(--border)", 
              background: "var(--panel)", cursor: "pointer", fontSize: "clamp(11px, 3vw, 13px)"
            }}>Más ▾</button>
            {moreOpen && (
              <div role="menu" style={{
                position: "absolute", right: 0, marginTop: 6, background: "var(--panel)",
                border: "1px solid var(--border)", borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                minWidth: 200, padding: 8, display: "grid", gap: 6, zIndex: 60
              }}>
                <Link href="/aviso-legal" onClick={() => setMoreOpen(false)}>Aviso legal</Link>
                <Link href="/politica-de-privacidad" onClick={() => setMoreOpen(false)}>Privacidad</Link>
                <a
                  href="https://www.instagram.com/dr.massimilianoconte/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Dr. Massimiliano Conte"
                  onClick={() => setMoreOpen(false)}
                >
                  Instagram
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}


