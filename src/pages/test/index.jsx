import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import "./csstest.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs data here
    setBlogs([
      {
        id: 1,
        title: "Migrating to Linear 101",
        description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
        image: "https://i.pinimg.com/736x/08/5a/4d/085a4d71f151aa236200be13cb55b9ef.jpg",
        author: "Jonathan White",
        date: "19 Jan 2023",
      },
      // Add more blog posts...
    ]);
  }, []);

  return (
    <div className="blog-container">
      <header className="blog-header">
        <div className="header-content">
          <h1>Blog</h1>
          <p>The latest industry news, interviews, technologies, and resources.</p>
        </div>
      </header>

      <main>
        <section className="featured-post">
          <img src="https://i.pinimg.com/736x/e2/d7/b8/e2d7b866f10745f5e88e8095d53d6178.jpg" alt="Featured post" />
          <div className="featured-content">
            <span className="featured-label">Featured</span>
            <h2>Breaking Into Product Design: Advice from Untitled Founder, Frankie</h2>
            <p>Let's get one thing out of the way: you don't need a fancy Bachelor's Degree to get into Product Design. We sat down with Frankie Sullivan to talk about breaking into product design and how anyone can get into this growing industry.</p>
            <a href="#" className="read-more">→</a>
          </div>
        </section>

        <section className="recent-posts">
          <h2>Recent blog posts</h2>
          <div className="blog-grid">
            {blogs.map((blog) => (
              <article key={blog.id} className="blog-card">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-content">
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                  <div className="blog-meta">
                    <span>{blog.author}</span>
                    <span>{blog.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button className="load-more">Load more</button>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;