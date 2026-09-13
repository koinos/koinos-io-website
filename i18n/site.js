import { normaliseLocale } from "@/i18n";

const copy = {
  en: {
    learn: "Learn",
    getKoin: "How to buy KOIN",
    whitepaper: "Whitepaper",
    features: "Features",
    faqs: "FAQs",
    documentation: "Documentation",
    ecosystem: "Ecosystem",
    roadmap: "Roadmap",
    team: "Team",
    history: "History",
    help: "Help",
    mediaKit: "Media Kit",
    contact: "Contact us",
    social: "Social",
    other: "Other",
    claim: "Claim Pre-Mainnet KOIN",
    blog: "Blog",
    securityTitle: "Security Notice",
    officialDomains: "Official Koinos domains only:",
    warning: "Warning:",
    hiringWarning:
      "Koinos is NOT currently hiring. Any job offers claiming to be from Koinos are scams. Do not provide personal information or send money.",
    rights: "All Rights Reserved",
    language: "Choose language",
    languageMenu: "Language",
  },
  es: {
    learn: "Aprender",
    getKoin: "Cómo comprar KOIN",
    whitepaper: "Libro blanco",
    features: "Características",
    faqs: "Preguntas frecuentes",
    documentation: "Documentación",
    ecosystem: "Ecosistema",
    roadmap: "Hoja de ruta",
    team: "Equipo",
    history: "Historia",
    help: "Ayuda",
    mediaKit: "Kit de prensa",
    contact: "Contacto",
    social: "Redes",
    other: "Otros",
    claim: "Reclamar KOIN anterior a mainnet",
    blog: "Blog",
    securityTitle: "Aviso de seguridad",
    officialDomains: "Únicos dominios oficiales de Koinos:",
    warning: "Advertencia:",
    hiringWarning:
      "Koinos NO está contratando actualmente. Toda oferta de trabajo que afirme proceder de Koinos es una estafa. No facilites datos personales ni envíes dinero.",
    rights: "Todos los derechos reservados",
    language: "Elegir idioma",
    languageMenu: "Idioma",
  },
};

export function getSiteCopy(locale) {
  return copy[normaliseLocale(locale)];
}
