"use client";

import { useState, useEffect } from "react";

type Language = "es" | "ca" | "en" | "it";

export function SimpleLanguageSelector() {
  const [currentLang, setCurrentLang] = useState<Language>("es");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['es', 'ca', 'en', 'it'].includes(savedLang)) {
      setCurrentLang(savedLang);
      document.documentElement.lang = savedLang;
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
  };

  const languages = {
    es: { flag: "🇪🇸", name: "Español" },
    ca: { flag: "🏴", name: "Català" },
    en: { flag: "🇬🇧", name: "English" },
    it: { flag: "🇮🇹", name: "Italiano" }
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
        <span>{languages[currentLang].flag}</span>
        <span>{languages[currentLang].name}</span>
        <span style={{ fontSize: "0.7rem" }}>▼</span>
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
          {(Object.keys(languages) as Language[]).map((lang) => (
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
              <span>{languages[lang].flag}</span>
              <span>{languages[lang].name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function getCurrentLanguage(): Language {
  if (typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['es', 'ca', 'en', 'it'].includes(savedLang)) {
      return savedLang;
    }
  }
  return 'es';
}

