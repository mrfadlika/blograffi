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
          <section
            className="py-5 text-center position-relative"
            style={{
              backgroundColor: "#1c1e24",
              borderRadius: "30px",
              margin: "40px 20px",
              overflow: "hidden",
            }}
          >
            {/* Ornamen Dekoratif */}
            <div
              className="position-absolute top-0 start-0"
              style={{
                width: "150px",
                height: "150px",
                background:
                  "radial-gradient(circle, rgba(13,110,253,0.2) 0%, rgba(28,30,36,0) 70%)",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <div
              className="position-absolute bottom-0 end-0"
              style={{
                width: "200px",
                height: "200px",
                background:
                  "radial-gradient(circle, rgba(13,110,253,0.15) 0%, rgba(28,30,36,0) 70%)",
                borderRadius: "50%",
                transform: "translate(30%, 30%)",
              }}
            />

            <div className="container py-4">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2
                    className="text-white fw-bold display-5 mb-4"
                    style={{
                      textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    }}
                  >
                    CODE <span className="text-danger">ERROR</span> TERUS?
                  </h2>

                  <p className="text-white fs-5 my-4 opacity-90">
                    Temukan solusi dari setiap error yang kamu hadapi dengan
                    mudah dan cepat.
                  </p>

                  <div className="d-flex flex-column align-items-center">
                    <a
                      href="/stack-over"
                      className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-bold mb-4 shadow-sm hover-scale"
                      style={{
                        transition: "all 0.3s ease",
                        transform: "scale(1)",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      <i className="bi bi-code-slash me-2"></i>
                      Solusi Error
                    </a>

                    <div className="d-flex align-items-center justify-content-center flex-wrap gap-3">
                      <div className="d-flex" style={{ marginRight: "15px" }}>
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="position-relative"
                            style={{
                              marginLeft: i > 1 ? "-10px" : 0,
                              zIndex: 6 - i,
                              transition: "transform 0.3s ease",
                            }}
                            onMouseOver={(e) =>
                              (e.currentTarget.style.transform =
                                "translateY(-5px)")
                            }
                            onMouseOut={(e) =>
                              (e.currentTarget.style.transform =
                                "translateY(0)")
                            }
                          >
                            <img
                              src={`https://placehold.co/45x45/1c1e24/ffffff/png?text=${i}`}
                              alt={`Member ${i}`}
                              className="rounded-circle border border-2 border-white shadow-sm"
                              style={{
                                width: "45px",
                                height: "45px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="d-flex">
                        <p className="text-white mb-0">
                          Lebih dari <span className="fw-bold">47</span> Orang
                          Kesulitan menemukan Error codenya
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <FooterMain />
    </>
  );
};

export default Home;
