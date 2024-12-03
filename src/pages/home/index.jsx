import { h } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";
import "./CSSBlogs.css";
import Typed from "typed.js";
import TechSlider from "../../Context/TechSlider/TechSlider";
import PriceFormatter from "../../Context/PriceFormatter";
import FooterMain from "../../Context/Footer/Footer.Main";

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
        cat: "gratis",
      },
      {
        id: 2,
        title: "Tutorial Restfull API Laravel 11",
        description:
          "Panduan lengkap tentang Laravel API menggunakan Laravel 11",
        image: "/banner2.png",
        author: "Raffi Fadlika",
        date: "20 Okt 2024",
        link: "/laravel-api",
        cat: "premium",
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
    <>
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
                            blog.cat === "gratis" || blog.cat === "Gratis"
                              ? "text-bg-success"
                              : blog.cat === "premium" || blog.cat === "Premium"
                              ? "text-bg-warning"
                              : "text-bg-danger"
                          }`}
                        >
                          {blog.cat === "gratis" || blog.cat === "Gratis"
                            ? "Gratis"
                            : blog.cat === "premium" || blog.cat === "Premium"
                            ? "Premium"
                            : "Banned"}
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
            <button className="load-more">Load more</button>
          </section>

          <section className="py-5">
            <div className="container">
              <h2 className="text-center fw-bold mb-4">Tutorial Set</h2>
              <p className="text-center text-muted mb-5">
                Kumpulan rangkaian tutorial berdasarkan studi kasus
              </p>
              <div className="row">
                <div className="col-md-4 d-flex linkhrefnya">
                  <div className="card text-center border-0 shadow-sm flex-fill">
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex justify-content-center align-items-center position-relative">
                        <div className="badge bg-gradient position-absolute top-0 end-0 m-2">
                          Premium
                        </div>
                        <img
                          src="/nuxt3auth.webp"
                          alt="Nuxt 3 Auth"
                          className="img-fluid mb-3"
                          style={{
                            width: "350px",
                            height: "350px",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                      <h5 className="card-title fw-bold text-black mt-auto">
                        Nuxt 3 Auth
                      </h5>
                      <p className="card-text text-muted">
                        Tutorial Register & Login
                      </p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-primary btn-sm mb-3 p-2">
                        7 Tutorial
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 d-flex linkhrefnya">
                  <div className="card text-center border-0 shadow flex-fill">
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex justify-content-center align-items-center position-relative">
                        <div className="badge bg-gradient position-absolute top-0 end-0 m-2">
                          Premium
                        </div>
                        <img
                          src="/laravel_react_zustand.webp"
                          alt="Laravel React Zustand"
                          className="img-fluid mb-3"
                          style={{
                            width: "350px",
                            height: "350px",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                      <h5 className="card-title fw-bold text-black mt-auto">
                        Laravel React Zustand
                      </h5>
                      <p className="card-text text-muted">
                        Tutorial Laravel, React, dan Zustand
                      </p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-primary btn-sm mb-3 p-2">
                        7 Tutorial
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 d-flex linkhrefnya">
                  <div className="card text-center border-0 shadow-sm flex-fill">
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex justify-content-center align-items-center position-relative">
                        <div className="badge bg-gradient position-absolute top-0 end-0 m-2">
                          Premium
                        </div>
                        <img
                          src="/laravel_vue_pinia.webp"
                          alt="Laravel Vue Pinia"
                          className="img-fluid mb-3"
                          style={{
                            width: "350px",
                            height: "350px",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                      <h5 className="card-title fw-bold text-black mt-auto">
                        Laravel Vue Pinia
                      </h5>
                      <p className="card-text text-muted">
                        Tutorial Laravel, Vue, dan Pinia
                      </p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-primary btn-sm mb-3 p-2">
                        7 Tutorial
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      {/* <FooterMain /> */}
      <footer className="bg-secondary text-center">
        <div className="container-fluid p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="bi bi-facebook"></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="bi bi-twitter"></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="bi bi-google"></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <i className="bi bi-github"></i>
            </a>
          </section>
        </div>
        <div
          className="container-fluid text-center text-white p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © {new Date().getFullYear()} Copyright:{" "}
          <a className="text-white" href="https://mdbootstrap.com/">
            Raffi Fadlika
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
