import Link from "next/link";

export function Header() {
  return (
    <header style={{
      borderBottom: "1px solid var(--border)", position: "sticky", top: 0,
      background: "var(--panel)", zIndex: 50, backdropFilter: "saturate(180%) blur(8px)",
    }}>
      <nav className="container" style={{
        padding: "12px 20px", display: "grid", gridTemplateColumns: "1fr auto",
        gap: "1rem", alignItems: "center",
      }}>
        <Link href="/" style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>
          Dr. Massimiliano Conte
        </Link>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", justifySelf: "end" }}>
          <Link href="/">Inicio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contacto</Link>
          <Link href="/aviso-legal">Aviso legal</Link>
          <Link href="/politica-de-privacidad">Privacidad</Link>
          <a
            href="https://www.instagram.com/dr.massimilianoconte/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Dr. Massimiliano Conte"
          >
            Instagram
          </a>
        </div>
      </nav>
    </header>
  );
}


