const achievements = [
  {
    year: "2025",
    title: "Python Certification",
    desc: "Completed Python Programming Certification."
  },
  {
    year: "2026",
    title: "Machine Learning Project",
    desc: "Developed Intelligent Achari System and Wildlife Monitoring System."
  },
  {
    year: "2026",
    title: "Portfolio Website",
    desc: "Designed and developed a responsive React portfolio website."
  },
  {
    year: "2026",
    title: "Placement Preparation",
    desc: "Preparing for Software Development and AI roles."
  }
];

function Achievements() {
  return (
    <section className="section" id="achievements">
      <h2 className="section-title">Achievements</h2>

      <div className="timeline">
        {achievements.map((item) => (
          <div className="timeline-card" key={item.title}>
            <span>{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;