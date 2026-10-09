import { useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../data/navLinks";
import { useLang } from "../i18n";

export default function Nav({ active, scrolled, theme, onThemeToggle }) {
  const { t, toggleLang } = useLang();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  // Sur l'accueil : scroll vers la section. Ailleurs (pages blog) : retour à l'accueil puis scroll.
  const scroll = (id) => {
    const target = id.toLowerCase();
    if (onHome) {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (target === "blog") { navigate("/blog"); return; }
    navigate("/");
    setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }), 300);
  };

  const isDark = theme === "dark";

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-logo" onClick={() => scroll("home")}>
        &lt;Mohamed /&gt;
      </div>

      <ul className="nav-links">
        {NAV_LINKS.map((n) => (
          <li key={n}>
            <a
              className={active === n ? "active" : ""}
              onClick={(e) => { e.preventDefault(); scroll(n); }}
              href={`#${n.toLowerCase()}`}
            >
              {t(`nav.${n}`)}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-tools">
      {/* Bouton de langue : affiche la langue vers laquelle on bascule */}
      <button
        className="theme-toggle lang-toggle"
        onClick={toggleLang}
        aria-label={t("lang.switch")}
        title={t("lang.switch")}
      >
        {t("lang.label")}
      </button>

      {/* Toggle thème */}
      <button
        className="theme-toggle"
        onClick={onThemeToggle}
        aria-label={isDark ? t("theme.light") : t("theme.dark")}
        title={isDark ? t("theme.light") : t("theme.dark")}
      >
        {isDark ? (
          /* Soleil */
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        ) : (
          /* Lune */
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>
      </div>
    </nav>
  );
}
