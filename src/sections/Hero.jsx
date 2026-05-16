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
            <span className="accent-word">Creative</span>
          </div>
          <div className="outline">Developer</div>
        </h1>

        <p className="hero-sub">
          I build <strong>beautiful, performant</strong> digital products that live at the intersection of design and engineering.
          Specializing in{" "}
          <TypedText
            words={["React / Next.js" , "Full-Stack Apps"]}
          />
        </p>

        <div className="hero-cta">
          <button
            className="btn-primary"
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </button>
          <button
            className="btn-ghost"
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
          </button>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line" />
          Scroll to explore
        </div>
      </section>
  );
}