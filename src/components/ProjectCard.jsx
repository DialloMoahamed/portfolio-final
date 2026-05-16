export default function ProjectCard({ project }) {
  return (
    <div
      className="project-card"
      style={{ "--card-color": project.color }}
    >
      <div className="project-icon" style={{ color: project.color }}>
        {project.icon}
      </div>
      <div className="project-title">{project.title}</div>
      <div className="project-desc">{project.desc}</div>
      <div className="project-tags">
        {project.tags.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
      <div className="project-arrow">↗</div>
    </div>
  );
}