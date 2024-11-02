import { h } from 'preact';
import { useCallback } from 'preact/hooks';
import './ComingSoon.css';

const ComingSoon = () => {
  const handleGoBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <div className="coming-soon-container">
      <div className="content">
        <h1>Coming Soon</h1>
        <p>We're working on something exciting! Stay tuned for updates.</p>
        
        <div className="social-links">
          <a href="https://www.instagram.com/mr.fadlika/" className="social-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Follow on Instagram
          </a>
          <a href="https://github.com/mrfadlika" className="social-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Check GitHub
          </a>
        </div>

        <div className="contact-info">
          <p>Want to discuss? <a href="https://wa.me/62882020802944">WhatsApp Me</a></p>
        </div>

        <button onClick={handleGoBack} className="go-back-btn">
          <i className="fas fa-arrow-left"></i> Go Back
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;