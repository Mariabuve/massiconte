"use client";

import { useState } from "react";

type TabKey = "incluye" | "beneficios" | "paraQuien";

export function TabbedInfo() {
  const [tab, setTab] = useState<TabKey>("incluye");

  return (
    <section id="enfoque-y-resultados" style={{ marginTop: "var(--space-16)" }}>
      <h2 className="text-gradient" style={{ fontSize: "2rem", marginBottom: "var(--space-6)", textAlign: "center" }}>
        Enfoque, resultados y para quién
      </h2>

      <div className="panel shadow" style={{ padding: "var(--space-6)" }}>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "nowrap", overflowX: "auto", paddingBottom: 6 }}>
          <button onClick={() => setTab("incluye")} aria-pressed={tab === "incluye"}
            style={{
              padding: "10px 16px",
              borderRadius: "var(--radius)",
              border: tab === "incluye" ? "2px solid var(--accent)" : "1px solid var(--border)",
              background: tab === "incluye" ? "var(--accent-light)" : "var(--panel)",
              color: "var(--fg)",
              whiteSpace: "nowrap"
            }}>Qué incluye</button>
          <button onClick={() => setTab("beneficios")} aria-pressed={tab === "beneficios"}
            style={{
              padding: "10px 16px",
              borderRadius: "var(--radius)",
              border: tab === "beneficios" ? "2px solid var(--accent)" : "1px solid var(--border)",
              background: tab === "beneficios" ? "var(--accent-light)" : "var(--panel)",
              color: "var(--fg)",
              whiteSpace: "nowrap"
            }}>Qué se consigue</button>
          <button onClick={() => setTab("paraQuien")} aria-pressed={tab === "paraQuien"}
            style={{
              padding: "10px 16px",
              borderRadius: "var(--radius)",
              border: tab === "paraQuien" ? "2px solid var(--accent)" : "1px solid var(--border)",
              background: tab === "paraQuien" ? "var(--accent-light)" : "var(--panel)",
              color: "var(--fg)",
              whiteSpace: "nowrap"
            }}>Para quién</button>
        </div>

        <div style={{ marginTop: "var(--space-6)" }}>
          {tab === "incluye" && (
            <div style={{ display: "grid", gap: "var(--space-6)", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
              <Card title="Evaluación 360º" text="Historia clínica traumatológica, pruebas disponibles y análisis de hábitos (actividad física, alimentación, descanso, estrés)." />
              <Card title="Objetivos claros" text="Definimos metas realistas (dolor, función, retorno a actividad) y medibles." />
              <Card title="Plan personalizado" text="Ejercicio terapéutico, nutrición orientada a tejido, higiene del sueño y estrategias de estrés." />
              <Card title="Acompañamiento y ajustes" text="Revisiones periódicas con métricas funcionales para adaptar el plan." />
              <Card title="Prevención de recaídas" text="Educación del dolor, pautas de mantenimiento y retorno seguro a la actividad." />
            </div>
          )}

          {tab === "beneficios" && (
            <div style={{ display: "grid", gap: "var(--space-6)", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              <Card title="Menos dolor" text="Reducción del dolor y de la inflamación percibida." />
              <Card title="Más función" text="Subir/bajar escaleras, caminar, entrenar, trabajar." />
              <Card title="Recuperación rápida" text="Tras lesión o cirugía de forma segura." />
              <Card title="Más energía" text="Mejor sueño, clave para mantener resultados." />
              <Card title="Resultados sostenibles" text="Hábitos practicables en tu día a día." />
            </div>
          )}

          {tab === "paraQuien" && (
            <div style={{ display: "grid", gap: "var(--space-6)", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
              <Card title="Dolor crónico" text="Artrosis, lumbalgia, cervicalgia y dolor musculoesquelético crónico." />
              <Card title="Lesiones deportivas" text="Sobrecargas y retorno al deporte con seguridad." />
              <Card title="Pre y posquirúrgico" text="Preparación y recuperación posquirúrgica." />
              <Card title="Mejorar función" text="Evitar recaídas con un enfoque activo y progresivo." />
              <Card title="Prevención" text="Optimizar tu salud musculoesquelética sin patología actual." />
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


