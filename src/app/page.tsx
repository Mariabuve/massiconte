import Image from "next/image";
export default function HomePage() {
  return (
    <main>
      <section className="panel shadow" style={{ padding: "0", overflow: "hidden" }}>
        <div className="grid-1-2" style={{ alignItems: "center" }}>
          <div style={{ padding: "36px 24px" }}>
            <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", margin: 0 }}>
              Dr. Massimiliano Conte
            </h1>
            <p style={{ color: "var(--muted)", maxWidth: 760, margin: "8px 0 0" }}>
              Cirugía Ortopédica y Traumatología. Medicina del estilo de vida.
              Atención integral y basada en evidencia para tu recuperación y
              bienestar a largo plazo.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
              <a href="/contact" style={{
                background: "var(--accent)", color: "var(--accent-contrast)",
                padding: "10px 16px", borderRadius: "var(--radius)", border: "1px solid transparent"
              }}>Solicitar cita</a>
              <a href="#areas" style={{
                border: "1px solid var(--border)", padding: "10px 16px",
                borderRadius: "var(--radius)", color: "var(--fg)", background: "var(--panel)"
              }}>Ver especialidades</a>
            </div>
          </div>
          <div className="hero-img">
            {/* Hero image */}
            <Image
              src="/Foto%20perfil%20Doctoralia.jpeg"
              alt="Dr. Massimiliano Conte"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "contain", background: "#f8fafc" }}
              quality={85}
              priority
            />
          </div>
        </div>
      </section>

      <section id="areas" style={{ marginTop: 32 }}>
        <h2>Áreas de atención</h2>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr", alignItems: "stretch" }}>
          <div className="panel shadow" style={{ padding: 16 }}>
            Artroscopia y reparación de lesiones deportivas
          </div>
          <div className="panel shadow" style={{ padding: 16 }}>
            Patología de hombro, rodilla, cadera y tobillo
          </div>
          <div className="panel shadow" style={{ padding: 16 }}>
            Fracturas y lesiones traumáticas
          </div>
          <div className="panel shadow" style={{ padding: 16 }}>
            Rehabilitación y programas de estilo de vida
          </div>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Enfoque</h2>
        <p>
          Trabajo con un enfoque multidisciplinar centrado en la persona, con
          decisiones compartidas y tratamientos basados en la mejor evidencia
          científica disponible.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Contacto</h2>
        <p>
          ¿Tienes preguntas o deseas una valoración?{" "}
          <a href="/contact">Escríbeme desde la página de contacto</a>.
        </p>
      </section>
    </main>
  );
}


