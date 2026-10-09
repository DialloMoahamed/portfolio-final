import useInView from "../hooks/useInView";
import { useLang } from "../i18n";

export default function About() {
  const { t } = useLang();
  const [aboutRef, aboutVisible] = useInView();

  return (
    <section id="about" ref={aboutRef}>
            <div className={`fade-in${aboutVisible ? " visible" : ""}`}>
              <div className="section-tag">{t("about.tag")}</div>
              <h2 className="section-title">
                {t("about.title1")}
                <br />{t("about.title2")}{" "}
                <span style={{ color: "var(--accent)" }}>{t("about.title3")}</span>
              </h2>
            </div>
    
            <div className="about-grid" style={{ marginTop: 60 }}>
              <div className={`fade-in delay-1${aboutVisible ? " visible" : ""}`}>
                <div className="about-card">
                  <div className="about-avatar">⚡</div>
                  <div className="about-text">
                    <p>
                      {t("about.p1a")} <strong>{t("about.p1b")}</strong> {t("about.p1c")}
                    </p>
                    <p>
                      {t("about.p2")}
                    </p>
                    <p style={{ marginBottom: 0 }}>
                      {t("about.p3a")} <strong>{t("about.p3b")}</strong> {t("about.p3c")}
                    </p>
                  </div>
                </div>
              </div>
    
              <div className={`fade-in delay-2${aboutVisible ? " visible" : ""}`}>
                <div className="stats-grid">
                  {[
                    { n: "2+", l: t("about.stat1") },
                    { n: "30+", l: t("about.stat2") },
                    { n: "12+", l: t("about.stat3") },
                    { n: "100%", l: t("about.stat4") },
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