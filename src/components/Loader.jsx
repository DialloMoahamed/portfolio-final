import { useEffect, useState } from "react";
import { useLang } from "../i18n";

export default function Loader({ onDone }) {
  const { t } = useLang();
  const [phase, setPhase] = useState("in"); // in → hold → out

  useEffect(() => {
    // Après 1.4s → commence à sortir
    const t1 = setTimeout(() => setPhase("out"), 1400);
    // Après 1.9s → appelle onDone pour afficher le site
    const t2 = setTimeout(() => onDone(), 1900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div className={`loader-root${phase === "out" ? " loader-exit" : ""}`}>
      <div className="loader-inner">
        {/* Logo animé */}
        <div className="loader-logo">
          <span className="loader-bracket loader-bracket--left">&lt;</span>
          <span className="loader-name">MA</span>
          <span className="loader-bracket loader-bracket--right">/&gt;</span>
        </div>

        {/* Barre de chargement */}
        <div className="loader-bar-wrap">
          <div className="loader-bar-track">
            <div className="loader-bar-fill" />
          </div>
          <span className="loader-bar-label">{t("loader.loading")}</span>
        </div>
      </div>

      {/* Coins décoratifs */}
      <span className="loader-corner loader-corner--tl" />
      <span className="loader-corner loader-corner--tr" />
      <span className="loader-corner loader-corner--bl" />
      <span className="loader-corner loader-corner--br" />
    </div>
  );
}
