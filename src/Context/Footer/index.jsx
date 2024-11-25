import { h } from "preact";
import "./Footer.styled.css";

const Footer = () => {
  return (
    <div className="blog-page footer">
      <img
        src="https://avatars.githubusercontent.com/u/101388811?v=4"
        alt="Raffi Fadlika"
        className="rounded-circle"
        style={{ width: "100px", height: "100px", marginBottom: "0px" }}
      />
      <div className="blog-page tulisan">
        <h2>Raffi Fadlika</h2>
        <p>Fullstack Developer</p>
      </div>
      <div className="blog-page sebelah-kanan">
        <p>
          Suka dengan tulisan saya? Kamu bisa memberikan dukungan dengan
          berdonasi atau bagikan konten ini di sosial media. Terima kasih atas
          dukungannya!
        </p>
        <a className="btn btn-primary" href="https://saweria.co/raffifadlika">
          Donasi Saweria
        </a>
      </div>
    </div>
  );
};

export default Footer;
