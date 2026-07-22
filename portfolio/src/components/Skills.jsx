function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "C",
    "C++",
    "MySQL",
    "Git",
    "Machine Learning",
  ];

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;