import { useEffect, useState } from "react";
import profileImage from "../assets/images/profile.jpg";

const roles = [
  "Computer Science Engineering Student",
  "Python Developer",
  "Web Developer",
  "AI & Machine Learning Enthusiast",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(
              currentRole.substring(0, displayText.length + 1)
            );
          } else {
            setIsDeleting(true);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(
              currentRole.substring(0, displayText.length - 1)
            );
          } else {
            setIsDeleting(false);
            setRoleIndex((previousIndex) =>
              (previousIndex + 1) % roles.length
            );
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="intro">Hello 👋 I'm</p>

        <h1>Aditya Yuvraj Patil</h1>

        <h2 className="typing-text">
          {displayText}
          <span className="cursor">|</span>
        </h2>

        <p className="hero-description">
          Passionate about Python, Web Development, Artificial Intelligence,
          Machine Learning and building useful software projects.
        </p>

        <div className="hero-buttons">
          <a
            href="/Aditya_Patil_Resume.pdf"
            download
            className="primary-btn"
          >
            Download Resume
          </a>

          <a
            href="https://www.linkedin.com/in/adityayuvarajpatil"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            LinkedIn
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/adityayuvarajpatil"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            in
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            GH
          </a>

          <a
            href="mailto:ap78147814@gmail.com"
            title="Email"
          >
            @
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src={profileImage} alt="Aditya Patil" />
      </div>
    </section>
  );
}

export default Hero;