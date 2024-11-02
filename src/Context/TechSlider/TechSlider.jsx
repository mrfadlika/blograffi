import { h } from "preact";
import "./TechSlider.styled.css";

const technologies = [
    { name: "PHP", description: "Server-side Scripting Language", logo: "/php.svg" },
    { name: "Bootstrap", description: "Front-end CSS Framework", logo: "/bootstrap_logo.svg" },
    { name: "Preact", description: "Lightweight React Alternative", logo: "/preact.svg" },
    { name: "Java", description: "Object-Oriented Programming Language", logo: "/java-icon.svg" },
    { name: "Laravel", description: "PHP Web Application Framework", logo: "/laravel.svg" },
    { name: "React", description: "JavaScript Library for UI", logo: "/images.png" },
    { name: "Flutter", description: "UI SDK for Mobile, Web, and Desktop", logo: "/flutter.svg" },
    { name: "React Native", description: "Mobile App Framework", logo: "/images.png" },
  ];
const TechSlider = () => {
  return (
    <div className="tech-slider-wrapper">
      <div className="tech-slider-container">
        <div className="marquee">
          <div className="marquee-content">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <a href={tech.link} className="text-decoration-none">
                  <div className="card rounded border-0 shadow-sm card-category">
                    <img src={tech.logo} alt={`${tech.name} logo`} className="tech-logo" />
                    <div className="tech-info">
                      <h3>{tech.name}</h3>
                      <p>{tech.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="marquee-content">
            {technologies.map((tech, index) => (
              <div key={`clone-${index}`} className="tech-item">
                <a href={tech.link} className="text-decoration-none">
                  <div className="card rounded border-0 shadow-sm card-category">
                    <img src={tech.logo} alt={`${tech.name} logo`} className="tech-logo" />
                    <div className="tech-info">
                      <h3>{tech.name}</h3>
                      <p>{tech.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSlider;