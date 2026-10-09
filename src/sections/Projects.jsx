import { useState } from "react";
import { PROJECTS, CATEGORIES } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import useInView from "../hooks/useInView";
import { useLang } from "../i18n";

export default function Projects() {
  const { t } = useLang();
  const [projectsRef, projectsVisible] = useInView();
  const [category, setCategory] = useState("all");

  const visible = category === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === category);

  return (
    <section id="projects" ref={projectsRef}>
      <div className={`fade-in${projectsVisible ? " visible" : ""}`}>
        <div className="section-tag">{t("projects.tag")}</div>
        <h2 className="section-title">
          {t("projects.title1")} <span style={{ color: "var(--accent)" }}>{t("projects.title2")}</span>
        </h2>
      </div>

      <div className={`filter-bar fade-in delay-1${projectsVisible ? " visible" : ""}`} role="tablist" aria-label={t("projects.filter")}>
        {CATEGORIES.map((c) => {
          const count = c.id === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c.id).length;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={category === c.id}
              className={`filter-btn${category === c.id ? " active" : ""}`}
              onClick={() => setCategory(c.id)}
            >
              {t(`cat.${c.id}`)} <span className="filter-count">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="projects-grid">
        {visible.map((p, i) => (
          <div
            key={p.id}
            className={`fade-in delay-${Math.min(i + 1, 4)}${projectsVisible ? " visible" : ""}`}
          >
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
