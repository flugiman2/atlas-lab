import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../lib/translations";

const LanguageContext = createContext({
  locale: "es",
  setLocale: () => {},
  t: translations.es,
});

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    if (typeof window === "undefined") return "es";
    return window.localStorage.getItem("atlas-locale") || "es";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("atlas-locale", locale);
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const t = translations[locale] || translations.es;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
