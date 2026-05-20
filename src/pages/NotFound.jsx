import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);

  // Compte à rebours → redirige vers l'accueil
  useEffect(() => {
    if (count <= 0) { navigate("/"); return; }
    const t = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [count, navigate]);

  return (
    <div className="notfound-root">
      {/* Grille de fond (réutilise le body::after du portfolio) */}
      <div className="notfound-grid" />

      {/* Anneaux décoratifs */}
      <div className="notfound-ring" style={{ width: 600, height: 600, top: "50%", left: "50%", transform: "translate(-60%, -60%)", opacity: 0.15 }} />
      <div className="notfound-ring" style={{ width: 350, height: 350, top: "50%", left: "50%", transform: "translate(-30%, -30%)", opacity: 0.1 }} />

      <div className="notfound-inner">

        {/* Glitch 404 */}
        <div className="notfound-code" data-text="404">404</div>

        <div className="notfound-tag">Page introuvable</div>

        <h1 className="notfound-title">
          Tu t'es perdu dans{" "}
          <span style={{ color: "var(--accent)" }}>le vide</span>
        </h1>

        <p className="notfound-desc">
          Cette page n'existe pas. Redirection automatique vers l'accueil dans{" "}
          <span className="notfound-count">{count}s</span>
        </p>

        {/* Barre de progression */}
        <div className="notfound-bar">
          <div
            className="notfound-bar-fill"
            style={{ width: `${(count / 10) * 100}%` }}
          />
        </div>

        <div className="notfound-actions">
          <button className="btn-primary" onClick={() => navigate("/")}>
            ← Retour à l'accueil
          </button>
          <button
            className="btn-ghost"
            onClick={() => {
              navigate("/");
              setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 300);
            }}
          >
            Me contacter
          </button>
        </div>

        {/* Liens rapides */}
        <div className="notfound-links">
          {["Projets", "Compétences", "Contact"].map((label) => (
            <button
              key={label}
              className="notfound-link"
              onClick={() => {
                navigate("/");
                setTimeout(() => document.getElementById(label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))?.scrollIntoView({ behavior: "smooth" }), 300);
              }}
            >
              {label} ↗
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
