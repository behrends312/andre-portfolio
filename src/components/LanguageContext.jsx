import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const t = {
    en: {
      role: "Full Stack Developer",
      heroText:
        "Developer focused on building solid UIs, real integrations and consistent deliveries.",
      servicesTitle: "How can I help your business?",
      contactTitle: "Let's Work Together!",
    },
    pt: {
      role: "Desenvolvedor Full Stack",
      heroText:
        "Desenvolvedor focado em UI sólida, integrações reais e entregas consistentes.",
      servicesTitle: "Como posso ajudar seu negócio?",
      contactTitle: "Vamos trabalhar juntos!",
    },
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: t[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
