import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: "1px solid var(--border)", marginTop: "4rem" }}>
      <div className="container" style={{ padding: "20px" }}>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact">Contacto</Link>
            <Link href="/aviso-legal">Aviso legal</Link>
            <Link href="/politica-de-privacidad">Política de privacidad</Link>
          </div>
          <p style={{ color: "var(--muted)", margin: 0 }}>
            © {year} Derechos de autor. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}


