import { h } from "preact";
import "./TechSlider.styled.css";

const technologies = [
  {
    name: "PHP",
    description: "Server-side Scripting Language",
    logo: "/php.svg",
<<<<<<< HEAD
    link: "https://php.net"
=======
    link: "https://php.net",
>>>>>>> 0bd80f03700b7b0014de008ebe768ca0253159dc
  },
  {
    name: "Bootstrap",
    description: "Front-end CSS Framework",
    logo: "/bootstrap_logo.svg",
<<<<<<< HEAD
    link: "https://getbootstrap.com/"
=======
    link: "https://getbootstrap.com"
>>>>>>> 0bd80f03700b7b0014de008ebe768ca0253159dc
  },
  {
    name: "Preact",
    description: "Lightweight React Alternative",
    logo: "/preact.svg",
<<<<<<< HEAD
    link: "https://preactjs.com/"
=======
    link: "https://preactjs.com"
>>>>>>> 0bd80f03700b7b0014de008ebe768ca0253159dc
  },
  {
    name: "Java",
    description: "Object-Oriented Programming Language",
    logo: "/java-icon.svg",
<<<<<<< HEAD
    link: "https://www.java.com/en/"
=======
    link: "https://java.com"
>>>>>>> 0bd80f03700b7b0014de008ebe768ca0253159dc
  },
  {
    name: "Laravel",
    description: "PHP Web Application Framework",
    logo: "/laravel.svg",
<<<<<<< HEAD
    link: "https://laravel.com/"
=======
    link: "https://laravel.com"
>>>>>>> 0bd80f03700b7b0014de008ebe768ca0253159dc
  },
  {
    name: "React",
    description: "JavaScript Library for UI",
    logo: "/images.png",
<<<<<<< HEAD
    link: "https://react.dev/"
=======
    link: "https://react.dev"
>>>>>>> 0bd80f03700b7b0014de008ebe768ca0253159dc
  },
  {
    name: "Flutter",
    description: "UI SDK for Mobile, Web, and Desktop",
    logo: "/flutter.svg",
<<<<<<< HEAD
    link: "https://flutter.dev/"
=======
    link: "https://flutter.dev"
>>>>>>> 0bd80f03700b7b0014de008ebe768ca0253159dc
  },
  {
    name: "React Native",
    description: "Mobile App Framework",
    logo: "/images.png",
<<<<<<< HEAD
    link: "https://reactnative.dev/"
  },
];

=======
    link: "https://reactnative.dev"
  },
];
>>>>>>> 0bd80f03700b7b0014de008ebe768ca0253159dc
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
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="tech-logo"
                    />
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
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="tech-logo"
                    />
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
