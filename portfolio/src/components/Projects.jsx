const projects = [
  {
    title: "Intelligent Achari System",
    description:
      "A catering ingredient estimation system that calculates required food quantities based on attendee count and selected menu.",
    technology: "Python, Tkinter, MySQL",
    github: "#",
    demo: "#",
  },
  {
    title: "Wildlife Monitoring System",
    description:
      "An AI-based wildlife monitoring and alerting system using YOLO to detect animal species and store detection records.",
    technology: "Python, YOLO, SQLite",
    github: "#",
    demo: "#",
  },
  {
    title: "Civil Infrastructure Management",
    description:
      "A centralized platform concept for managing government civil projects, funds, documents, materials and work progress.",
    technology: "Web Development, Database",
    github: "#",
    demo: "#",
  },
  {
    title: "Periodic Table Explorer",
    description:
      "An interactive periodic table that displays element symbols, atomic numbers, groups and basic properties.",
    technology: "HTML, CSS, JavaScript",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-number">0{projects.indexOf(project) + 1}</div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className="project-tech">{project.technology}</span>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="project-btn outline"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;