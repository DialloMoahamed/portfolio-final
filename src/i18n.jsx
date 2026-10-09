import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_LANG, translations } from "./translations";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("lang");
      return saved === "fr" || saved === "en" ? saved : DEFAULT_LANG;
    } catch {
      return DEFAULT_LANG;
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch { /* stockage indisponible */ }
  }, [lang]);

  const toggleLang = useCallback(() => setLang((l) => (l === "fr" ? "en" : "fr")), []);
  const t = useCallback((key) => translations[lang][key] ?? translations.fr[key] ?? key, [lang]);
  const value = useMemo(() => ({ lang, toggleLang, t }), [lang, toggleLang, t]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang doit être utilisé dans <LangProvider>");
  return ctx;
}
