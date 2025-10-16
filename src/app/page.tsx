import Image from "next/image";
import { TabbedInfo } from "@/components/TabbedInfo";
export default function HomePage() {
  return (
    <main>
      <section className="panel shadow-lg gradient-bg" style={{ padding: "0", overflow: "hidden" }}>
        <div className="grid-1-2" style={{ alignItems: "center" }}>
          <div style={{ padding: "var(--space-12) var(--space-8)" }}>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", margin: 0, marginBottom: "var(--space-4)" }}>
              Dr. Massimiliano Conte
            </h1>
            <h2 style={{ 
              fontSize: "1.5rem", 
              color: "var(--accent)", 
              marginBottom: "var(--space-4)",
              fontWeight: "600"
            }}>
              Traumatología + Medicina del Estilo de Vida
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: 760, margin: "0 0 var(--space-6)", fontSize: "1.1rem", lineHeight: 1.6 }}>
              Recupera movilidad, reduce dolor y vuelve a lo que te gusta hacer.
            </p>
            <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
              <a href="mailto:dr.conte.massimiliano@gmail.com" style={{
                background: "linear-gradient(135deg, var(--accent) 0%, #38a169 100%)", 
                color: "var(--accent-contrast)",
                padding: "12px 24px", 
                borderRadius: "var(--radius)", 
                border: "1px solid transparent",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 12px rgba(44, 122, 123, 0.15)"
              }}>Pedir cita</a>
              <a href="#evaluacion" style={{
                border: "2px solid var(--accent)", 
                padding: "12px 24px",
                borderRadius: "var(--radius)", 
                color: "var(--accent)", 
                background: "transparent",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.2s ease"
              }}>Evaluación inicial</a>
            </div>
          </div>
          <div className="hero-img">
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

      <section id="enfoque" style={{ marginTop: "var(--space-16)" }}>
        <div className="panel shadow" style={{ padding: "var(--space-12)", textAlign: "center" }}>
          <h2 className="text-gradient" style={{ fontSize: "2rem", marginBottom: "var(--space-6)" }}>
            ¿Por qué combinar traumatología y Medicina del Estilo de Vida?
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--muted)", maxWidth: 900, margin: "0 auto" }}>
            La lesión y el dolor musculoesquelético no solo dependen de la cirugía o las infiltraciones. Factores como la alimentación, el movimiento, el sueño y el estrés influyen en la inflamación, la fuerza muscular, la regeneración del tejido y la adherencia al tratamiento. Mi enfoque integra la mejor evidencia clínica con intervenciones de estilo de vida para acelerar la recuperación y prevenir recaídas.
          </p>
        </div>
      </section>

      <section id="ayuda" style={{ marginTop: "var(--space-16)" }}>
        <h2 className="text-gradient" style={{ fontSize: "2rem", marginBottom: "var(--space-8)", textAlign: "center" }}>
          En qué te puedo ayudar
        </h2>
        <div style={{ 
          display: "grid", 
          gap: "var(--space-6)", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          alignItems: "stretch" 
        }}>
          <div className="panel shadow" style={{ 
            padding: "var(--space-8)", 
            border: "1px solid var(--border-light)"
          }}>
            <h3 style={{ color: "var(--accent)", marginBottom: "var(--space-3)" }}>Artrosis y dolor crónico</h3>
            <p style={{ margin: 0, color: "var(--muted)" }}>
              Rodilla, cadera, columna: menos dolor, más función.
            </p>
          </div>
          <div className="panel shadow" style={{ 
            padding: "var(--space-8)", 
            border: "1px solid var(--border-light)"
          }}>
            <h3 style={{ color: "var(--accent)", marginBottom: "var(--space-3)" }}>Lesiones deportivas</h3>
            <p style={{ margin: 0, color: "var(--muted)" }}>
              Tendinopatías, esguinces, roturas fibrilares: vuelve a entrenar con seguridad.
            </p>
          </div>
          <div className="panel shadow" style={{ 
            padding: "var(--space-8)", 
            border: "1px solid var(--border-light)"
          }}>
            <h3 style={{ color: "var(--accent)", marginBottom: "var(--space-3)" }}>Lumbalgia y cervicalgia</h3>
            <p style={{ margin: 0, color: "var(--muted)" }}>
              Plan integral de movilidad, fuerza y hábitos.
            </p>
          </div>
          <div className="panel shadow" style={{ 
            padding: "var(--space-8)", 
            border: "1px solid var(--border-light)"
          }}>
            <h3 style={{ color: "var(--accent)", marginBottom: "var(--space-3)" }}>Osteoporosis/osteopenia</h3>
            <p style={{ margin: 0, color: "var(--muted)" }}>
              Protege tu masa ósea y muscular.
            </p>
          </div>
          <div className="panel shadow" style={{ 
            padding: "var(--space-8)", 
            border: "1px solid var(--border-light)"
          }}>
            <h3 style={{ color: "var(--accent)", marginBottom: "var(--space-3)" }}>Recuperación posquirúrgica</h3>
            <p style={{ margin: 0, color: "var(--muted)" }}>
              Prepara tu cuerpo antes y optimiza después (prehab + rehab).
            </p>
          </div>
          <div className="panel shadow" style={{ 
            padding: "var(--space-8)", 
            border: "1px solid var(--border-light)"
          }}>
            <h3 style={{ color: "var(--accent)", marginBottom: "var(--space-3)" }}>Sobrepeso y resistencia a la insulina</h3>
            <p style={{ margin: 0, color: "var(--muted)" }}>
              Alivia carga y mejora capacidad funcional.
            </p>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "var(--space-8)" }}>
          <a href="#enfoque-detallado" style={{
            border: "2px solid var(--accent)", 
            padding: "12px 24px",
            borderRadius: "var(--radius)", 
            color: "var(--accent)", 
            background: "transparent",
            textDecoration: "none",
            fontWeight: "500",
            transition: "all 0.2s ease"
          }}>Conoce mi enfoque</a>
        </div>
      </section>

      <section id="enfoque-detallado" style={{ marginTop: "var(--space-16)" }}>
        <div className="panel shadow" style={{ padding: "var(--space-12)", textAlign: "center" }}>
          <h2 className="text-gradient" style={{ fontSize: "2rem", marginBottom: "var(--space-4)" }}>
            Enfoque: Traumatología + Estilo de Vida
          </h2>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.6, color: "var(--muted)", maxWidth: 800, margin: "0 auto var(--space-8)" }}>
            Menos dolor, más movimiento y mejores resultados sostenidos. Integramos la atención traumatológica con cambios terapéuticos en hábitos clave: ejercicio, nutrición, sueño y manejo del estrés.
          </p>
        </div>
      </section>

      <TabbedInfo />

      <section id="ubicaciones" style={{ marginTop: "var(--space-16)" }}>
        <h2 className="text-gradient" style={{ fontSize: "2rem", marginBottom: "var(--space-8)", textAlign: "center" }}>
          Dónde me puedes encontrar
        </h2>
        <div style={{ 
          display: "grid", 
          gap: "var(--space-6)", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
        }}>
          <div className="panel shadow" style={{ padding: "var(--space-8)" }}>
            <h3 style={{ color: "var(--accent)", marginBottom: "var(--space-4)" }}>
              <a href="https://hospitalclinicmaresme.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>
                Hospital Clínic Maresme
              </a>
            </h3>
            <p style={{ color: "var(--muted)", marginBottom: "var(--space-2)" }}>
              C/ Lepanto 13-21, 08301 Mataró (Barcelona)
            </p>
            <p style={{ color: "var(--muted)", marginBottom: "var(--space-2)" }}>
              T. 937 418 800
            </p>
            <p style={{ color: "var(--muted)", margin: 0 }}>
              Urgencias 24 horas, 365 días al año
            </p>
          </div>
          <div className="panel shadow" style={{ padding: "var(--space-8)" }}>
            <h3 style={{ color: "var(--accent)", marginBottom: "var(--space-4)" }}>
              <a href="https://consultorimedic.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>
                Consultori Mèdic del Maresme
              </a>
            </h3>
            <p style={{ color: "var(--muted)", marginBottom: "var(--space-2)" }}>
              Camí Ral, 478, 08302 Mataró
            </p>
            <p style={{ color: "var(--muted)", marginBottom: "var(--space-2)" }}>
              T. 931 71 59 99
            </p>
            <p style={{ color: "var(--muted)", margin: 0 }}>
              secretaria@consultorimedic.com
            </p>
          </div>
          <div className="panel shadow" style={{ padding: "var(--space-8)" }}>
            <h3 style={{ color: "var(--accent)", marginBottom: "var(--space-4)" }}>
              <a href="https://policliniclloret.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>
                Policlinic Lloret
              </a>
            </h3>
            <p style={{ color: "var(--muted)", marginBottom: "var(--space-2)" }}>
              Av. Vila de Blanes, 136, 17310 Lloret de Mar
            </p>
            <p style={{ color: "var(--muted)", marginBottom: "var(--space-2)" }}>
              T. 972 367 994
            </p>
            <p style={{ color: "var(--muted)", margin: 0 }}>
              info@policliniclloret.com
            </p>
          </div>
          <div className="panel shadow" style={{ padding: "var(--space-8)" }}>
            <h3 style={{ color: "var(--accent)", marginBottom: "var(--space-4)" }}>
              <a href="https://cmae.es" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>
                CMAE
              </a>
            </h3>
            <p style={{ color: "var(--muted)", marginBottom: "var(--space-2)" }}>
              Carrer de Montserrat, 54, 08302 Mataró
            </p>
            <p style={{ color: "var(--muted)", marginBottom: "var(--space-2)" }}>
              T. 937 98 04 40
            </p>
            <p style={{ color: "var(--muted)", margin: 0 }}>
              info@cmae.es
            </p>
          </div>
        </div>
      </section>

      <section id="evaluacion" style={{ marginTop: "var(--space-16)" }}>
        <div className="panel gradient-bg shadow-lg" style={{ padding: "var(--space-12)", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-6)", color: "var(--fg)" }}>
            ¿Necesitas una valoración?
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "var(--muted)", marginBottom: "var(--space-8)" }}>
            Reserva tu evaluación (30–45 min): diagnóstico y plan inicial.
          </p>
          <a href="mailto:dr.conte.massimiliano@gmail.com" style={{
            background: "linear-gradient(135deg, var(--accent) 0%, #38a169 100%)", 
            color: "var(--accent-contrast)",
            padding: "16px 32px", 
            borderRadius: "var(--radius)", 
            border: "1px solid transparent",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "1.1rem",
            transition: "all 0.2s ease",
            boxShadow: "0 4px 12px rgba(44, 122, 123, 0.15)",
            display: "inline-block"
          }}>Empezar evaluación</a>
        </div>
      </section>
    </main>
  );
}


