export default function SkillBar({ skill, visible }) {
  return (
    <div className="skill-row">
      <div className="skill-head">
        <span className="skill-name" style={{ color: skill.color }}>{skill.name}</span>
        <span className="skill-pct">{skill.level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{
            width: visible ? `${skill.level}%` : "0%",
            background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
          }}
        />
      </div>
    </div>
  );
}