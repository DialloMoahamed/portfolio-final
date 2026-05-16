import { PROJECTS } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import useInView from "../hooks/useInView";

export default function projects() {
    const [projectsRef, projectsVisible] = useInView();
    return (
        <section id="projects" ref={projectsRef}>
        <div className={`fade-in${projectsVisible ? " visible" : ""}`}>
          <div className="section-tag">Work</div>
          <h2 className="section-title">
            Featured <span style={{ color: "var(--accent)" }}>Projects</span>
          </h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
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