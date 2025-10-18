"use client";

import { useState, useEffect } from "react";

type Language = "es" | "ca" | "en" | "it";

interface Translations {
  [key: string]: {
    es: string;
    ca: string;
    en: string;
    it: string;
  };
}

const translations: Translations = {
  // Navigation
  "nav.home": {
    es: "Inicio",
    ca: "Inici", 
    en: "Home",
    it: "Home"
  },
  "nav.blog": {
    es: "Blog",
    ca: "Blog",
    en: "Blog", 
    it: "Blog"
  },
  "nav.contact": {
    es: "Contacto",
    ca: "Contacte",
    en: "Contact",
    it: "Contatto"
  },
  "nav.more": {
    es: "Más",
    ca: "Més",
    en: "More",
    it: "Altro"
  },
  "nav.legal": {
    es: "Aviso legal",
    ca: "Avís legal",
    en: "Legal notice",
    it: "Avviso legale"
  },
  "nav.privacy": {
    es: "Privacidad",
    ca: "Privacitat",
    en: "Privacy",
    it: "Privacy"
  },
  "nav.instagram": {
    es: "Instagram",
    ca: "Instagram",
    en: "Instagram",
    it: "Instagram"
  },

  // Hero section
  "hero.subtitle": {
    es: "Traumatología • Medicina del Estilo de Vida • Medicina Regenerativa",
    ca: "Traumatologia • Medicina de l'Estil de Vida • Medicina Regenerativa",
    en: "Traumatology • Lifestyle Medicine • Regenerative Medicine",
    it: "Traumatologia • Medicina dello Stile di Vita • Medicina Rigenerativa"
  },
  "hero.expertise": {
    es: "Experto en Ecografía Musculoesquelética",
    ca: "Expert en Ecografia Musculoesquelètica",
    en: "Expert in Musculoskeletal Ultrasound",
    it: "Esperto in Ecografia Muscoloscheletrica"
  },
  "hero.description": {
    es: "Recupera movilidad, reduce dolor y vuelve a lo que te gusta hacer.",
    ca: "Recupera mobilitat, redueix dolor i torna al que t'agrada fer.",
    en: "Recover mobility, reduce pain and return to what you love doing.",
    it: "Recupera la mobilità, riduci il dolore e torna a quello che ti piace fare."
  },
  "hero.cta.primary": {
    es: "Pedir cita",
    ca: "Demanar cita",
    en: "Book appointment",
    it: "Prenota appuntamento"
  },
  "hero.cta.secondary": {
    es: "Evaluación inicial",
    ca: "Avaluació inicial",
    en: "Initial evaluation",
    it: "Valutazione iniziale"
  },

  // Main sections
  "section.why.title": {
    es: "¿Por qué combinar Traumatología, Medicina del Estilo de Vida y Medicina Regenerativa?",
    ca: "Per què combinar Traumatologia, Medicina de l'Estil de Vida i Medicina Regenerativa?",
    en: "Why combine Traumatology, Lifestyle Medicine and Regenerative Medicine?",
    it: "Perché combinare Traumatologia, Medicina dello Stile di Vita e Medicina Rigenerativa?"
  },
  "section.why.description": {
    es: "La lesión y el dolor musculoesquelético no solo dependen de la cirugía o las infiltraciones. Factores como la alimentación, el movimiento, el sueño y el estrés influyen en la inflamación, la fuerza muscular, la regeneración del tejido y la adherencia al tratamiento. Mi enfoque integra la mejor evidencia clínica con intervenciones de estilo de vida y terapias regenerativas avanzadas (PRP, ácido hialurónico, etc.) para acelerar la recuperación y prevenir recaídas.",
    ca: "La lesió i el dolor musculoesquelètic no només depenen de la cirurgia o les infiltracions. Factors com l'alimentació, el moviment, el son i l'estrès influeixen en la inflamació, la força muscular, la regeneració del teixit i l'adherència al tractament. El meu enfocament integra la millor evidència clínica amb intervencions d'estil de vida i teràpies regeneratives avançades (PRP, àcid hialurònic, etc.) per accelerar la recuperació i prevenir recaigudes.",
    en: "Musculoskeletal injury and pain don't just depend on surgery or injections. Factors like nutrition, movement, sleep and stress influence inflammation, muscle strength, tissue regeneration and treatment adherence. My approach integrates the best clinical evidence with lifestyle interventions and advanced regenerative therapies (PRP, hyaluronic acid, etc.) to accelerate recovery and prevent relapses.",
    it: "Le lesioni e il dolore muscoloscheletrico non dipendono solo dalla chirurgia o dalle infiltrazioni. Fattori come alimentazione, movimento, sonno e stress influenzano l'infiammazione, la forza muscolare, la rigenerazione tissutale e l'aderenza al trattamento. Il mio approccio integra le migliori evidenze cliniche con interventi sullo stile di vita e terapie rigenerative avanzate (PRP, acido ialuronico, etc.) per accelerare il recupero e prevenire le recidive."
  },

  "section.help.title": {
    es: "En qué te puedo ayudar",
    ca: "En què et puc ajudar",
    en: "How I can help you",
    it: "Come posso aiutarti"
  },
  "section.help.subtitle": {
    es: "Algunos ejemplos de las condiciones que trato (entre otras):",
    ca: "Alguns exemples de les condicions que tracto (entre d'altres):",
    en: "Some examples of conditions I treat (among others):",
    it: "Alcuni esempi delle condizioni che tratto (tra le altre):"
  },

  // Treatment areas
  "treatment.arthrosis": {
    es: "Artrosis y dolor crónico",
    ca: "Artrosi i dolor crònic",
    en: "Arthrosis and chronic pain",
    it: "Artrosi e dolore cronico"
  },
  "treatment.arthrosis.desc": {
    es: "Rodilla, cadera, columna: menos dolor, más función.",
    ca: "Genoll, maluc, columna: menys dolor, més funció.",
    en: "Knee, hip, spine: less pain, more function.",
    it: "Ginocchio, anca, colonna: meno dolore, più funzione."
  },

  "treatment.sports": {
    es: "Lesiones deportivas",
    ca: "Lesions esportives",
    en: "Sports injuries",
    it: "Lesioni sportive"
  },
  "treatment.sports.desc": {
    es: "Tendinopatías, esguinces, roturas fibrilares: vuelve a entrenar con seguridad.",
    ca: "Tendinopaties, esquinços, ruptures fibrilars: torna a entrenar amb seguretat.",
    en: "Tendinopathies, sprains, muscle tears: return to training safely.",
    it: "Tendinopatie, distorsioni, strappi muscolari: torna ad allenarti in sicurezza."
  },

  "treatment.back": {
    es: "Lumbalgia y cervicalgia",
    ca: "Lumbàlgia i cervicalgia",
    en: "Low back pain and neck pain",
    it: "Lombalgia e cervicalgia"
  },
  "treatment.back.desc": {
    es: "Plan integral de movilidad, fuerza y hábitos.",
    ca: "Pla integral de mobilitat, força i hàbits.",
    en: "Comprehensive mobility, strength and habits plan.",
    it: "Piano integrale di mobilità, forza e abitudini."
  },

  "treatment.osteoporosis": {
    es: "Osteoporosis/osteopenia",
    ca: "Osteoporosi/osteopènia",
    en: "Osteoporosis/osteopenia",
    it: "Osteoporosi/osteopenia"
  },
  "treatment.osteoporosis.desc": {
    es: "Protege tu masa ósea y muscular.",
    ca: "Protegeix la teva massa òssia i muscular.",
    en: "Protect your bone and muscle mass.",
    it: "Proteggi la tua massa ossea e muscolare."
  },

  "treatment.postop": {
    es: "Recuperación posquirúrgica",
    ca: "Recuperació postquirúrgica",
    en: "Post-surgical recovery",
    it: "Recupero post-chirurgico"
  },
  "treatment.postop.desc": {
    es: "Prepara tu cuerpo antes y optimiza después (prehab + rehab).",
    ca: "Prepara el teu cos abans i optimitza després (prehab + rehab).",
    en: "Prepare your body before and optimize after (prehab + rehab).",
    it: "Prepara il tuo corpo prima e ottimizza dopo (prehab + rehab)."
  },

  "treatment.insulin": {
    es: "Sobrepeso y resistencia a la insulina",
    ca: "Sobrepès i resistència a la insulina",
    en: "Overweight and insulin resistance",
    it: "Sovrappeso e resistenza all'insulina"
  },
  "treatment.insulin.desc": {
    es: "Alivia carga y mejora capacidad funcional.",
    ca: "Alleuja càrrega i millora capacitat funcional.",
    en: "Relieve load and improve functional capacity.",
    it: "Allevia il carico e migliora la capacità funzionale."
  },

  "treatment.ultrasound": {
    es: "Ecografía Musculoesquelética",
    ca: "Ecografia Musculoesquelètica",
    en: "Musculoskeletal Ultrasound",
    it: "Ecografia Muscoloscheletrica"
  },
  "treatment.ultrasound.desc": {
    es: "Diagnóstico preciso para lesiones musculares, tendinosas y articulares. Punciones ecoguiadas para mejorar la precisión y tasa de éxito de las infiltraciones.",
    ca: "Diagnòstic precís per lesions musculars, tendinoses i articulars. Punccions ecoguiades per millorar la precisió i taxa d'èxit de les infiltracions.",
    en: "Precise diagnosis for muscle, tendon and joint injuries. Ultrasound-guided punctures to improve accuracy and success rate of infiltrations.",
    it: "Diagnosi precisa per lesioni muscolari, tendinee e articolari. Punture ecoguidate per migliorare la precisione e il tasso di successo delle infiltrazioni."
  },

  "treatment.crossbracing": {
    es: "Cross Bracing Protocol",
    ca: "Protocol Cross Bracing",
    en: "Cross Bracing Protocol",
    it: "Protocollo Cross Bracing"
  },
  "treatment.crossbracing.desc": {
    es: "Tratamiento pionero e innovador de la lesión del ligamento cruzado anterior en casos seleccionados.",
    ca: "Tractament pioner i innovador de la lesió del lligament creuat anterior en casos seleccionats.",
    en: "Pioneering and innovative treatment of anterior cruciate ligament injury in selected cases.",
    it: "Trattamento pionieristico e innovativo della lesione del legamento crociato anteriore in casi selezionati."
  },

  "treatment.surgery": {
    es: "Cirugía Ligamento Cruzado y Meniscal",
    ca: "Cirurgia Lligament Creuat i Meniscal",
    en: "Cruciate Ligament and Meniscal Surgery",
    it: "Chirurgia del Legamento Crociato e Meniscale"
  },
  "treatment.surgery.desc": {
    es: "Cirugía de LCA y meniscal cuando no es candidato para tratamiento conservador.",
    ca: "Cirurgia de LCA i meniscal quan no és candidat per tractament conservador.",
    en: "ACL and meniscal surgery when not a candidate for conservative treatment.",
    it: "Chirurgia ACL e meniscale quando non è candidato per trattamento conservativo."
  },

  // Regenerative Medicine
  "regenerative.title": {
    es: "Medicina Regenerativa",
    ca: "Medicina Regenerativa",
    en: "Regenerative Medicine",
    it: "Medicina Rigenerativa"
  },
  "regenerative.description": {
    es: "Terapias avanzadas como PRP, ácido hialurónico, etc. para artrosis, tendinopatías y lesiones deportivas, con indicación individualizada basada en evidencia científica.",
    ca: "Teràpies avançades com PRP, àcid hialurònic, etc. per artrosi, tendinopaties i lesions esportives, amb indicació individualitzada basada en evidència científica.",
    en: "Advanced therapies such as PRP, hyaluronic acid, etc. for arthrosis, tendinopathies and sports injuries, with individualized indication based on scientific evidence.",
    it: "Terapie avanzate come PRP, acido ialuronico, etc. per artrosi, tendinopatie e lesioni sportive, con indicazione individualizzata basata su evidenze scientifiche."
  },

  "regenerative.prp": {
    es: "PRP (Plasma Rico en Plaquetas)",
    ca: "PRP (Plasma Ric en Plaquetes)",
    en: "PRP (Platelet Rich Plasma)",
    it: "PRP (Plasma Ricco di Piastrine)"
  },
  "regenerative.prp.desc": {
    es: "Concentrado de factores de crecimiento para acelerar la regeneración de tejidos lesionados.",
    ca: "Concentrat de factors de creixement per accelerar la regeneració de teixits lesionats.",
    en: "Concentrate of growth factors to accelerate regeneration of injured tissues.",
    it: "Concentrato di fattori di crescita per accelerare la rigenerazione dei tessuti lesionati."
  },

  "regenerative.hyaluronic": {
    es: "Ácido Hialurónico",
    ca: "Àcid Hialurònic",
    en: "Hyaluronic Acid",
    it: "Acido Ialuronico"
  },
  "regenerative.hyaluronic.desc": {
    es: "Lubricación articular y protección del cartílago en artrosis y lesiones articulares.",
    ca: "Lubricació articular i protecció del cartílag en artrosi i lesions articulars.",
    en: "Joint lubrication and cartilage protection in arthrosis and joint injuries.",
    it: "Lubrificazione articolare e protezione della cartilagine nell'artrosi e nelle lesioni articolari."
  },

  "regenerative.cellular": {
    es: "Terapias Celulares",
    ca: "Teràpies Cel·lulars",
    en: "Cellular Therapies",
    it: "Terapie Cellulari"
  },
  "regenerative.cellular.desc": {
    es: "Evaluación de tratamientos avanzados para casos seleccionados y lesiones deportivas.",
    ca: "Avaluació de tractaments avançats per casos seleccionats i lesions esportives.",
    en: "Evaluation of advanced treatments for selected cases and sports injuries.",
    it: "Valutazione di trattamenti avanzati per casi selezionati e lesioni sportive."
  },

  // Conservative Treatment
  "conservative.title": {
    es: "Tratamiento Conservador",
    ca: "Tractament Conservador",
    en: "Conservative Treatment",
    it: "Trattamento Conservativo"
  },
  "conservative.description": {
    es: "Para todos los pacientes candidatos a tratamiento conservador, trabajo en estrecho contacto con un centro de fisioterapia deportiva y centro de readaptación de lesiones deportivas, garantizando un enfoque multidisciplinar coordinado para optimizar los resultados.",
    ca: "Per a tots els pacients candidats a tractament conservador, treballo en estret contacte amb un centre de fisioteràpia esportiva i centre de readaptació de lesions esportives, garantint un enfocament multidisciplinari coordinat per optimitzar els resultats.",
    en: "For all patients candidates for conservative treatment, I work in close contact with a sports physiotherapy center and sports injury readaptation center, guaranteeing a coordinated multidisciplinary approach to optimize results.",
    it: "Per tutti i pazienti candidati al trattamento conservativo, lavoro a stretto contatto con un centro di fisioterapia sportiva e centro di riadattamento delle lesioni sportive, garantendo un approccio multidisciplinare coordinato per ottimizzare i risultati."
  },

  // Approach section
  "approach.title": {
    es: "Mi enfoque integral",
    ca: "El meu enfocament integral",
    en: "My comprehensive approach",
    it: "Il mio approccio integrale"
  },

  "approach.tabs.process": {
    es: "Mi proceso",
    ca: "El meu procés",
    en: "My process",
    it: "Il mio processo"
  },
  "approach.tabs.results": {
    es: "Resultados",
    ca: "Resultats",
    en: "Results",
    it: "Risultati"
  },
  "approach.tabs.who": {
    es: "Para quién",
    ca: "Per a qui",
    en: "For whom",
    it: "Per chi"
  },

  // Evaluation section
  "evaluation.title": {
    es: "¿Necesitas una valoración?",
    ca: "Necessites una avaluació?",
    en: "Do you need an evaluation?",
    it: "Hai bisogno di una valutazione?"
  },
  "evaluation.description": {
    es: "Reserva tu evaluación: diagnóstico y plan inicial.",
    ca: "Reserva la teva avaluació: diagnòstic i pla inicial.",
    en: "Book your evaluation: diagnosis and initial plan.",
    it: "Prenota la tua valutazione: diagnosi e piano iniziale."
  },
  "evaluation.cta": {
    es: "Empezar evaluación",
    ca: "Començar avaluació",
    en: "Start evaluation",
    it: "Inizia valutazione"
  }
};

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState<Language>("es");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['es', 'ca', 'en', 'it'].includes(savedLang)) {
      setCurrentLang(savedLang);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
    setIsOpen(false);
    // Trigger re-render of all translated content
    window.location.reload();
  };

  const getFlag = (lang: Language) => {
    const flags = {
      es: "🇪🇸",
      ca: "🏴󠁥󠁳󠁣󠁴󠁿",
      en: "🇬🇧",
      it: "🇮🇹"
    };
    return flags[lang];
  };

  const getLanguageName = (lang: Language) => {
    const names = {
      es: "Español",
      ca: "Català",
      en: "English",
      it: "Italiano"
    };
    return names[lang];
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "4px 8px",
          borderRadius: "6px",
          border: "1px solid var(--border)",
          background: "var(--panel)",
          color: "var(--fg)",
          cursor: "pointer",
          fontSize: "clamp(0.75rem, 2.5vw, 0.9rem)",
          fontWeight: "500",
          whiteSpace: "nowrap"
        }}
      >
        <span>{getFlag(currentLang)}</span>
        <span>{getLanguageName(currentLang)}</span>
        <span style={{ fontSize: "0.8rem" }}>▼</span>
      </button>

      {isOpen && (
        <div style={{
          position: "absolute",
          top: "100%",
          right: 0,
          marginTop: "4px",
          background: "var(--panel)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          zIndex: 100,
          minWidth: "140px"
        }}>
          {(['es', 'ca', 'en', 'it'] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: "100%",
                padding: "8px 12px",
                border: "none",
                background: currentLang === lang ? "var(--accent-light)" : "transparent",
                color: "var(--fg)",
                cursor: "pointer",
                fontSize: "0.9rem",
                textAlign: "left"
              }}
            >
              <span>{getFlag(lang)}</span>
              <span>{getLanguageName(lang)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function t(key: string, lang: Language = "es"): string {
  return translations[key]?.[lang] || translations[key]?.["es"] || key;
}

export function useTranslation() {
  const [currentLang, setCurrentLang] = useState<Language>("es");

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['es', 'ca', 'en', 'it'].includes(savedLang)) {
      setCurrentLang(savedLang);
    }
  }, []);

  return {
    t: (key: string) => t(key, currentLang),
    currentLang
  };
}
