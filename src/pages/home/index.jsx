import { h } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";
import "./CSSBlogs.css";
import Typed from "typed.js";
import TechSlider from "../../Context/TechSlider/TechSlider";
import PriceFormatter from "../../Context/PriceFormatter";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const typedRef = useRef(null);

  useEffect(() => {
    setBlogs([
      {
        id: 1,
        title: "Memahami OOP dalam Java",
        description: "Panduan lengkap tentang OOP dalam Pemrograman Java",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSio4iHwto_mXFE3q2caH74o0QsKgsN79ehsw&s",
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
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvD-_e6KULLAtEtg16vKPZJmATkdXiZi09Q&s",
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
                  <img src={blog.image} alt={blog.title} />
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
      </main>
    </div>
  );
};

export default Home;
