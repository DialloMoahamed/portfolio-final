import TypedText from "../components/TypedText";

export default function Hero() {
  return (
    <section id="home">
      {/* Decorative rings */}
      <div className="deco-ring" style={{ width: 500, height: 500, top: -100, right: -100, opacity: 0.5 }} />
      <div className="deco-ring" style={{ width: 300, height: 300, top: 50, right: 50 }} />

      <div className="hero-eyebrow">
        <span />
        Available for work
      </div>

      <h1 className="hero-name">
        <div>Hello, I'm</div>
        <div>
          <span className="accent-word">Mohamed</span>
        </div>
        <div className="outline">Attahir</div>
      </h1>

      <p className="hero-sub">
        I build <strong>beautiful, performant</strong> digital products that live at the intersection of design and engineering.
        Specializing in{" "}
        <TypedText words={["HTML / CSS", "JavaScript", "React"]} />
      </p>

      <div className="hero-cta">
        <button
          className="btn-primary"
          onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
        >
          Voir mes projets
        </button>
        <button
          className="btn-ghost"
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
        >
          Me contacter
        </button>

        {/* Bouton CV — pointe vers public/CV.pdf */}
        <a
          className="btn-cv"
          href="/CV.pdf"
          download="CV_Mohamed_Attahir_Diallo.pdf"
          title="Télécharger mon CV"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Télécharger CV
        </a>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  );
}
