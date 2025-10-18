"use client";

import { useEffect } from "react";

export function GoogleTranslate() {
  useEffect(() => {
    // Cargar el script de Google Translate
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    // Función global para inicializar el widget
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'es,ca,en,it',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element');
    };

    return () => {
      // Limpiar el script al desmontar
      const existingScript = document.querySelector('script[src*="translate.google.com"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div id="google_translate_element" style={{
      display: "inline-block",
      verticalAlign: "middle"
    }}></div>
  );
}
