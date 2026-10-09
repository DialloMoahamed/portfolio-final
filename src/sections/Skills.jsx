import { SKILLS } from "../data/skills";
import SkillBar from "../components/SkillBar";
import useInView from "../hooks/useInView";
import { useLang } from "../i18n";

export default function Skills() {
  const { t } = useLang();
  const [skillsRef, skillsVisible] = useInView();

  return (
    <section id="skills" style={{ minHeight: "auto" }}>
            <div ref={skillsRef}>
              <div className={`fade-in${skillsVisible ? " visible" : ""}`}>
                <div className="section-tag">{t("skills.tag")}</div>
                <h2 className="section-title">
                  {t("skills.title1")} <span style={{ color: "var(--accent)" }}>{t("skills.title2")}</span>
                </h2>
              </div>
              <div className="skills-grid">
                {SKILLS.map((s, i) => (
                  <div
                    key={s.name}
                    className={`fade-in delay-${Math.min(i + 1, 4)}${skillsVisible ? " visible" : ""}`}
                  >
                    <SkillBar skill={s} visible={skillsVisible} />
                  </div>
                ))}
              </div>
            </div>
          </section>
  );
}