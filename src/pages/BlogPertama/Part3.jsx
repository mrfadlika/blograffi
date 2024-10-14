import { h } from "preact";
import "./BlogPertama.styles.css";
import CodeEditor from "../../Context/CodeEditor";
import { useState } from "preact/hooks";
import Modal from "../../Context/Modal";

const BlogPertamaPart3 = () => {
  const codeSnippetPertama = `#include <iostream>
#include <string>

using namespace std;

void myFunction(string fname) {
  cout << fname << " Refsnes" << endl;
}

int main() {
  myFunction("Liam");
  myFunction("Jenny");
  myFunction("Anja");
  return 0;
}

//Output : Liam Refsnes
//         Jenny Refsnes
//         Anja Refsnes
  `;

  const blogSeries = [
    {
      title: "Tutorial Coding OOP di Java #1: Apa itu OOP?",
      link: "/OOPJava/1",
    },
    {
      title:
        "Tutorial Coding OOP di Java #2: Mengenal Atribut, Method dan Constructor",
      link: "/OOPJava/2",
    },
    {
      title: "Tutorial Coding OOP di Java #3: Modifier dan Packages",
      link: "/OOPJava/3",
    },
  ];

  const currentPath = window.location.pathname;
  const [answer, setAnswer] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === "true") {
      setModalMessage("Pintar banget lu asli!");
    } else if (answer === "false") {
      setModalMessage("Salah, belajar lagi ya!");
    } else {
      setModalMessage("Please select an answer");
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="blog-page container">
      <div className="blog-page header align-items-center">
        <h2 className="text-black">
          Tutorial Coding OOP di Java #3: Modifier dan Packages
        </h2>
      </div>

      <div className="blog-page row">
        <div className="blog-page leftcolumn">
          <div className="blog-page card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSio4iHwto_mXFE3q2caH74o0QsKgsN79ehsw&s"
              alt="OOP"
              style={{ height: "200px", marginBottom: "30px" }}
            />
            <ul class="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>OOP Java Part 1</li>
            </ul>
            <h2>Coding OOP in Java</h2>
            <h6>Raffi Fadlika, Oct 14, 2024</h6>
            <p
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                marginTop: "20px",
              }}
            >
              Dikelas sebelumnya kita telah membahas tentang Atribut, Method dan
              Constructor, sekarang kita akan membahas lebih lanjut tentang{" "}
              <strong>Modifier</strong> dan <strong>Packages</strong>
            </p>
            <h4>Method</h4>
          </div>
        </div>
        <div className="blog-page rightcolumn">
          {/* <div className="blog-page card">
            <h2>About Me</h2>
            <div className="fakeimg" style={{ height: "100px" }}>
              Image
            </div>
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div> */}
          <div className="sticky-container">
            <div className="blog-page card">
              <h3>Daftar Seri Blog</h3>
              <hr />
              {blogSeries.map((blog, index) => (
                <div
                  key={index}
                  className={`blog-page ${
                    currentPath === blog.link ? "selected" : "unselected"
                  }`}
                  onClick={() => (window.location.href = blog.link)}
                  style={{ marginTop: "10px", marginBottom: "5px" }}
                >
                  {blog.title}
                </div>
              ))}
            </div>
            <div className="blog-page card">
              <h3>Follow Me</h3>
              <p>
                <a
                  className="btn btn-primary"
                  href="https://www.instagram.com/mr.fadlika/"
                  style={{ marginRight: "10px", marginBottom: "5px" }}
                >
                  <i
                    className="bi bi-instagram"
                    style={{ marginRight: "5px" }}
                  ></i>
                  Instagram
                </a>
                <a
                  className="btn btn-primary"
                  href="https://www.github.com/mrfadlika/"
                >
                  <i
                    className="bi bi-github"
                    style={{ marginRight: "5px" }}
                  ></i>
                  GitHub
                </a>
              </p>
              <p style={{ marginTop: "-5px" }}>
                Mau diskusi? <a href="https://wa.me/62882020802944">WhatsApp</a>
              </p>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default BlogPertamaPart3;
