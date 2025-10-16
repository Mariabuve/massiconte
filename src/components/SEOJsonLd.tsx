export function SEOJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Massimiliano Conte",
    "jobTitle": "Traumatólogo",
    "description": "Traumatología + Medicina del Estilo de Vida: menos dolor, más movimiento y resultados sostenibles.",
    "url": "https://www.drmassimilianoconte.com/",
    "sameAs": [
      "https://www.instagram.com/dr.massimilianoconte/"
    ],
    "knowsAbout": [
      "Traumatología",
      "Dolor musculoesquelético",
      "Lesiones deportivas",
      "Rehabilitación",
      "Medicina del Estilo de Vida"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}


