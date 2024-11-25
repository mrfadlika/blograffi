import { h } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";
import "./CSSBlogs.css";
import Typed from "typed.js";
import TechSlider from "../../Context/TechSlider/TechSlider";
import PriceFormatter from "../../Context/PriceFormatter";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("article");
  const typedRef = useRef(null);

  useEffect(() => {
    setBlogs([
      {
        id: 1,
        title: "Memahami OOP dalam Java",
        description: "Panduan lengkap tentang OOP dalam Pemrograman Java",
        image: "/banner1.png",
        author: "Raffi Fadlika",
        date: "9 Okt 2024",
        link: "/oopjava",
        harga: "0",
      },
      {
        id: 2,
        title: "Tutorial Restfull API Laravel 11",
        description:
          "Panduan lengkap tentang Laravel API menggunakan Laravel 11",
        image:
          "/banner2.png",
        author: "Raffi Fadlika",
        date: "20 Okt 2024",
        link: "/laravel-api",
        harga: "0",
      },
    ]);

    const options = {
      strings: ["Raffi Fadlika Blog", "Learning Site Technology"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
      cursorChar: "|",
    };

    typedRef.current = new Typed(".animated-title", options);

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="blog-container">
      <header className="blog-header">
        <div className="header-content">
          <h1 className="animated-title">
            <span className="animated-title-wrapper">
              <span className="animated-title-text"></span>
            </span>
          </h1>
          <p>The latest industry news, technologies, and resources.</p>
        </div>
      </header>

      <main>
        <TechSlider />

        <section className="recent-posts">
          <h2 className="mt-5">Recent blog posts</h2>
          <div className="blog-grid">
            {blogs.map((blog) => (
              <a href={blog.link} key={blog.id} className="linkhrefnya">
                <article className="blog-card">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    onLoad={(e) =>
                      console.log(
                        "Image dimensions:",
                        e.target.width,
                        "x",
                        e.target.height
                      )
                    }
                  />
                  <div className="blog-content">
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                    {/* <p>{blog.date}</p> */}
                    <div className="blog-meta">
                      <span>
                        {blog.author} • {blog.date}
                      </span>
                      <span
                        className={`badge ${
                          blog.harga === "0" || blog.harga === "Gratis"
                            ? "text-bg-success"
                            : "text-bg-warning"
                        }`}
                      >
                        <PriceFormatter amount={blog.harga} />
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
          <button className="load-more">Load more</button>
        </section>
{/* 
        <section className="category-navigation mb-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <button
                    className={`nav-link ${
                      activeCategory === "article" ? "active" : ""
                    }`}
                    onClick={() => handleCategoryChange("article")}
                  >
                    Article
                  </button>

                  <button
                    className={`nav-link ${
                      activeCategory === "stack-over" ? "active" : ""
                    }`}
                    onClick={() => handleCategoryChange("stack-over")}
                  >
                    Stack Over
                  </button>
                  <button
                    className={`nav-link ${
                      activeCategory === "ebooks" ? "active" : ""
                    }`}
                    onClick={() => handleCategoryChange("ebooks")}
                  >
                    eBooks
                  </button>
                  <button
                    className={`nav-link ${
                      activeCategory === "kelas-online" ? "active" : ""
                    }`}
                    onClick={() => handleCategoryChange("kelas-online")}
                  >
                    Kelas Online
                  </button>
                  <button
                    className={`nav-link ${
                      activeCategory === "tutorial-set" ? "active" : ""
                    }`}
                    onClick={() => handleCategoryChange("tutorial-set")}
                  >
                    Tutorial Set
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="tutorial-set-section"
          style={{ display: activeCategory === "tutorial-set" ? "block" : "none" }}
        >
          <h2 className="mt-5">Articles</h2>
          <div className="blog-grid">
            <a href="/oopjava" className="linkhrefnya">
              <article className="blog-card">
                <img src="/banner1.png" alt="OOP Java" />
                <div className="blog-content">
                  <h3>Memahami OOP dalam Java</h3>
                  <p>Panduan lengkap tentang OOP dalam Pemrograman Java</p>
                  <div className="blog-meta">
                    <span>Raffi Fadlika • 9 Okt 2024</span>
                    <span className="badge text-bg-success">
                      <PriceFormatter amount="0" />
                    </span>
                  </div>
                </div>
              </article>
            </a>
            <a href="/laravel-api" className="linkhrefnya">
              <article className="blog-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvD-_e6KULLAtEtg16vKPZJmATkdXiZi09Q&s"
                  alt="Laravel API"
                />
                <div className="blog-content">
                  <h3>Tutorial Restfull API Laravel 11</h3>
                  <p>
                    Panduan lengkap tentang Laravel API menggunakan Laravel 11
                  </p>
                  <div className="blog-meta">
                    <span>Raffi Fadlika • 20 Okt 2024</span>
                    <span className="badge text-bg-success">
                      <PriceFormatter amount="0" />
                    </span>
                  </div>
                </div>
              </article>
            </a>
          </div>
        </section>

        <section
          className="kelas-online-section"
          style={{
            display: activeCategory === "kelas-online" ? "block" : "none",
          }}
        >
          <h2 className="mt-5">Kelas Online</h2>
          <div className="blog-grid">
            <a href="/fullstack" className="linkhrefnya">
              <article className="blog-card">
                <img src="/fullstack.jpg" alt="Fullstack Development" />
                <div className="blog-content">
                  <h3>Fullstack Development dengan MERN Stack</h3>
                  <p>
                    Belajar menjadi Fullstack Developer dari dasar hingga mahir
                  </p>
                  <div className="blog-meta">
                    <span>Raffi Fadlika • 15 Okt 2024</span>
                    <span className="badge text-bg-warning">
                      <PriceFormatter amount="999000" />
                    </span>
                  </div>
                </div>
              </article>
            </a>
            <a href="/react-basic" className="linkhrefnya">
              <article className="blog-card">
                <img src="/react.jpg" alt="React Basic" />
                <div className="blog-content">
                  <h3>React JS Fundamental</h3>
                  <p>
                    Menguasai dasar-dasar React JS untuk Frontend Development
                  </p>
                  <div className="blog-meta">
                    <span>Raffi Fadlika • 22 Okt 2024</span>
                    <span className="badge text-bg-warning">
                      <PriceFormatter amount="799000" />
                    </span>
                  </div>
                </div>
              </article>
            </a>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default Home;
