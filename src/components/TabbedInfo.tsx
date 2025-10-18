"use client";

import { useState } from "react";

type TabKey = "incluye" | "beneficios" | "paraQuien";

export function TabbedInfo() {
  const [tab, setTab] = useState<TabKey>("incluye");

  return (
    <section id="enfoque-y-resultados" style={{ marginTop: "var(--space-16)" }}>
      <h2 className="text-gradient" style={{ fontSize: "2rem", marginBottom: "var(--space-6)", textAlign: "center" }}>
        Mi enfoque integral
      </h2>

      <div className="panel shadow" style={{ padding: "var(--space-8)" }}>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", paddingBottom: 6 }}>
          <button onClick={() => setTab("incluye")} aria-pressed={tab === "incluye"}
            style={{
              padding: "12px 20px",
              borderRadius: "var(--radius)",
              border: tab === "incluye" ? "2px solid var(--accent)" : "1px solid var(--border)",
              background: tab === "incluye" ? "var(--accent-light)" : "var(--panel)",
              color: "var(--fg)",
              whiteSpace: "nowrap",
              fontWeight: tab === "incluye" ? "600" : "400"
            }}>Mi proceso</button>
          <button onClick={() => setTab("beneficios")} aria-pressed={tab === "beneficios"}
            style={{
              padding: "12px 20px",
              borderRadius: "var(--radius)",
              border: tab === "beneficios" ? "2px solid var(--accent)" : "1px solid var(--border)",
              background: tab === "beneficios" ? "var(--accent-light)" : "var(--panel)",
              color: "var(--fg)",
              whiteSpace: "nowrap",
              fontWeight: tab === "beneficios" ? "600" : "400"
            }}>Resultados</button>
          <button onClick={() => setTab("paraQuien")} aria-pressed={tab === "paraQuien"}
            style={{
              padding: "12px 20px",
              borderRadius: "var(--radius)",
              border: tab === "paraQuien" ? "2px solid var(--accent)" : "1px solid var(--border)",
              background: tab === "paraQuien" ? "var(--accent-light)" : "var(--panel)",
              color: "var(--fg)",
              whiteSpace: "nowrap",
              fontWeight: tab === "paraQuien" ? "600" : "400"
            }}>Para quién</button>
        </div>

        <div style={{ marginTop: "var(--space-8)" }}>
          {tab === "incluye" && (
            <div style={{ display: "grid", gap: "var(--space-6)", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              <Card title="🔍 Evaluación integral" text="Historia clínica completa, análisis de hábitos (nutrición, ejercicio, sueño, estrés) y pruebas complementarias cuando sea necesario." />
              <Card title="🎯 Plan personalizado" text="Ejercicio terapéutico específico, nutrición antiinflamatoria, suplementación dirigida y estrategias de recuperación." />
              <Card title="💊 Soporte nutricional" text="Nutrición orientada a la regeneración tisular, control de inflamación y suplementación basada en evidencia." />
              <Card title="📊 Seguimiento activo" text="Revisiones periódicas con métricas funcionales, ajustes del plan y educación continua." />
            </div>
          )}

          {tab === "beneficios" && (
            <div style={{ display: "grid", gap: "var(--space-6)", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              <Card title="⚡ Menos dolor, más función" text="Reducción significativa del dolor y mejora de la capacidad funcional en actividades diarias y deportivas." />
              <Card title="🏃‍♂️ Recuperación acelerada" text="Regeneración tisular optimizada con nutrición específica y ejercicio terapéutico dosificado." />
              <Card title="💪 Fortaleza sostenible" text="Mejora de la fuerza muscular, densidad ósea y capacidad de recuperación a largo plazo." />
              <Card title="🛡️ Prevención de recaídas" text="Educación del dolor, hábitos saludables y herramientas para mantener los resultados." />
            </div>
          )}

          {tab === "paraQuien" && (
            <div style={{ display: "grid", gap: "var(--space-6)", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              <Card title="🏥 Dolor crónico" text="Artrosis, lumbalgia, cervicalgia y dolor musculoesquelético persistente que afecta la calidad de vida." />
              <Card title="🏃‍♂️ Lesiones deportivas" text="Tendinopatías, esguinces, roturas musculares y retorno seguro al deporte con protocolos específicos." />
              <Card title="🔬 Casos complejos" text="Pacientes que requieren enfoque multidisciplinar con ecografía, medicina regenerativa y cirugía cuando sea necesario." />
              <Card title="🎯 Optimización" text="Deportistas y personas activas que buscan prevenir lesiones y maximizar su rendimiento." />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="panel shadow" style={{ padding: "var(--space-6)", border: "1px solid var(--border-light)" }}>
      <h3 style={{ color: "var(--accent)", marginBottom: "var(--space-3)" }}>{title}</h3>
      <p style={{ color: "var(--muted)", margin: 0 }}>{text}</p>
    </div>
  );
}


