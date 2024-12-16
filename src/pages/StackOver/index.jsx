import { useState, useEffect } from "preact/hooks";
import { Link } from "preact-router";
import "./StackOver.styled.css";
import FooterMain from "../../Context/Footer/Footer.Main";

const StackOver = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorPosts, setErrorPosts] = useState([
    {
      id: 1,
      title: "Laravel : Unknown collation: 'utf8mb4_0900_ai_ci'",
      description: "Cara mengatasi error Unknown collation: 'utf8mb4_0900_ai_ci' di Laravel",
      tags: ["Laravel", "Database"],
      solutions: 1,
      views: 0,
      isViewed: false
    },
    {
      id: 2,
      title: "How to Re-render Screen after leave Screen on React Native Navigation",
      description: "How to Re-render Screen after leave Screen on React Native Navigation",
      tags: ["React JS", "JavaScript", "React Native"],
      solutions: 2,
      views: 0,
      isViewed: false
    }
  ]);

  useEffect(() => {
    const savedViews = localStorage.getItem('errorPostViews');
    if (savedViews) {
      const parsedViews = JSON.parse(savedViews);
      setErrorPosts(posts => 
        posts.map(post => ({
          ...post,
          views: parsedViews[post.id]?.views || post.views,
          isViewed: parsedViews[post.id]?.isViewed || false
        }))
      );
    }
  }, []);

  const handleView = (postId) => {
    setErrorPosts(posts => {
      const updatedPosts = posts.map(post => {
        if (post.id === postId && !post.isViewed) {
          return {
            ...post,
            views: post.views + 1,
            isViewed: true
          };
        }
        return post;
      });

      const viewsData = updatedPosts.reduce((acc, post) => ({
        ...acc,
        [post.id]: {
          views: post.views,
          isViewed: post.isViewed
        }
      }), {});
      
      localStorage.setItem('errorPostViews', JSON.stringify(viewsData));
      return updatedPosts;
    });
  };

  const getTagColor = (tag) => {
    const colors = {
      'Laravel': '#FF2D20',
      'Database': '#13aa52',
      'React JS': '#61DAFB',
      'JavaScript': '#F7DF1E',
      'React Native': '#61DAFB'
    };
    return colors[tag] || '#6c757d';
  };

  return (
    <>
      <div className="stack-container">
        <div className="container-fluid text-center py-5">
          <div className="mb-4">
            <div className="bug-icon-wrapper">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2535/2535518.png"
                alt="Bug Icon" 
                className="bug-icon"
              />
            </div>
          </div>
          <h1 className="text-dark fw-bold mb-3 display-4">STUCK OVER</h1>
          <p className="text-muted mb-5">
            Temukan solusi dari setiap error yang kamu hadapi dengan mudah dan cepat.
          </p>
        </div>

        <div className="search-container mb-5">
          <div className="position-relative">
            <input
              type="text"
              className="form-control form-control-lg search-input"
              placeholder="Apa yang ingin Anda pelajari?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="bi bi-search position-absolute end-0 top-50 translate-middle-y me-3 text-muted"></i>
          </div>
        </div>

        <div className="error-posts">
          {errorPosts.map(post => (
            <Link 
              key={post.id} 
              href={`/stack-over/${post.id}`}
              className="text-decoration-none"
              onClick={() => handleView(post.id)}
            >
              <div className="error-card">
                <h3 className="text-dark mb-2">{post.title}</h3>
                <p className="text-muted mb-3">{post.description}</p>
                
                <div className="d-flex justify-content-between align-items-center">
                  <div className="tags">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="badge me-2"
                        style={{
                          backgroundColor: getTagColor(tag)
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="d-flex align-items-center text-muted">
                    <div className="me-3">
                      <i className="bi bi-check-circle-fill text-success me-1"></i>
                      <span>{post.solutions} SOLUTION</span>
                    </div>
                    <div>
                      <i className="bi bi-eye me-1"></i>
                      <span>{post.views} VIEWS</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FooterMain />
    </>
  );
};

export default StackOver;