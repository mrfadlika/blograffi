import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import "./CSSBlogs.css";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [titleText, setTitleText] = useState("Raffi Fadlika Blog");
  const [activeFilter, setActiveFilter] = useState("Semua");

  useEffect(() => {
    // Fetch blogs data here
    setBlogs([
      {
        id: 1,
        title: "Memahami OOP dalam Java",
        description: "Panduan lengkap tentang OOP dalam Java.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSio4iHwto_mXFE3q2caH74o0QsKgsN79ehsw&s",
        path: "/OOPJava/1",
        tags: ["Java", "OOP"],
        points: 120,
      },
    ]);

    // Animasi judul
    const titles = ["Raffi Fadlika Blog", "Blog Teknologi"];
    let currentIndex = 0;

    const animateTitle = () => {
      setTitleText("");
      let i = 0;
      const typing = setInterval(() => {
        if (i < titles[currentIndex].length) {
          setTitleText((prev) => prev + titles[currentIndex][i]);
          i++;
        } else {
          clearInterval(typing);
          setTimeout(() => {
            currentIndex = (currentIndex + 1) % titles.length;
            animateTitle();
          }, 2000);
        }
      }, 100);
    };

    animateTitle();
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    // Di sini Anda bisa menambahkan logika untuk memfilter blog jika diperlukan
  };

  return (
    <div className="css-blogs-container">
      <header className="blog-header">
        <div className="header-content">
          <h1 className="animated-title">{titleText}</h1>
          <p>Temukan artikel terbaru seputar dunia teknologi</p>
        </div>
      </header>

      <nav className="filter-nav">
        <button
          className={activeFilter === "Semua" ? "active" : ""}
          onClick={() => handleFilterClick("Semua")}
        >
          Semua
        </button>
        <button
          className={activeFilter === "Terbaru" ? "active" : ""}
          onClick={() => handleFilterClick("Terbaru")}
        >
          Terbaru
        </button>
        <button
          className={activeFilter === "Populer" ? "active" : ""}
          onClick={() => handleFilterClick("Populer")}
        >
          Populer
        </button>
        <select>
          <option>Pilih Kategori</option>
          <option>Web Development</option>
          <option>Mobile Development</option>
          <option>Data Science</option>
        </select>
      </nav>

      <div className="blog-list">
        {blogs.map((blog) => (
          <a href={blog.path} style={{textDecoration: "none"}}>
          <article key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <div className="blog-tags">
                {blog.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="blog-points">
              <a href={blog.path} style={{textDecoration: "none", color: "white"}}>
                Baca Selengkapnya
              </a>
            </div>
          </article>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
