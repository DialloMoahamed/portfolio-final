import useInView from "../hooks/useInView";

export default function About() {
  const [aboutRef, aboutVisible] = useInView();

  return (
    <section id="about" ref={aboutRef}>
            <div className={`fade-in${aboutVisible ? " visible" : ""}`}>
              <div className="section-tag">About Me</div>
              <h2 className="section-title">
                Crafting digital
                <br />experiences with{" "}
                <span style={{ color: "var(--accent)" }}>purpose</span>
              </h2>
            </div>
    
            <div className="about-grid" style={{ marginTop: 60 }}>
              <div className={`fade-in delay-1${aboutVisible ? " visible" : ""}`}>
                <div className="about-card">
                  <div className="about-avatar">⚡</div>
                  <div className="about-text">
                    <p>
                      I'm a <strong>front end developer</strong> with 2+ years of experience crafting polished web applications. Passionate about clean architecture and pixel-perfect interfaces.
                    </p>
                    <p>
                      When I'm not coding, you'll find me exploring generative art, contributing to open-source, or obsessing over typography.
                    </p>
                    <p style={{ marginBottom: 0 }}>
                      Currently based in <strong>Niamey, Niger</strong> — open to remote opportunities worldwide.
                    </p>
                  </div>
                </div>
              </div>
    
              <div className={`fade-in delay-2${aboutVisible ? " visible" : ""}`}>
                <div className="stats-grid">
                  {[
                    { n: "2+", l: "Years Experience" },
                    { n: "30+", l: "Projects Shipped" },
                    { n: "12+", l: "Happy Clients" },
                    { n: "100%", l: "Commitment" },
                  ].map((s) => (
                    <div className="stat-item" key={s.l}>
                      <div className="stat-num">{s.n}</div>
                      <div className="stat-label">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
  );
}