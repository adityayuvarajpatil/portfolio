function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-card">
        <p>
          I am a B.Tech Computer Science and Engineering student at
          Tatyasaheb Kore Institute of Engineering and Technology,
          Warananagar.
        </p>

        <p>
          I have a strong foundation in C, C++, Python, HTML, CSS,
          JavaScript and MySQL. I am interested in Web Development,
          Backend Development, Artificial Intelligence and Machine Learning.
        </p>

        <div className="about-details">
          <div>
            <span>Degree</span>
            <strong>B.Tech CSE</strong>
          </div>

          <div>
            <span>CGPA</span>
            <strong>7.8</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>Kolhapur, Maharashtra</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>Open to Internships</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;