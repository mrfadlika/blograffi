const FooterMain = () => (
  <footer className="bg-dark text-white pt-5 pb-3">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold mb-3">Blog Raffi Fadlika</h5>
          <p className="text-muted">
            Temukan berbagai tutorial berdasarkan studi kasus.
          </p>
          <p className="text-muted">
            &copy; {new Date().getFullYear()} Blog. All Right Reserved.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold mb-3">Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#about" className="text-muted text-decoration-none">
                About Me
              </a>
            </li>
            <li>
              <a href="#tutorials" className="text-muted text-decoration-none">
                Tutorials
              </a>
            </li>
            <li>
              <a href="#contact" className="text-muted text-decoration-none">
                Contact Me
              </a>
            </li>
            <li>
              <a href="#faq" className="text-muted text-decoration-none">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold mb-3">
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-geo-alt-fill me-2"></i>Politeknik Negeri
                Ujung Pandang
              </li>
              <li>
                <i className="bi bi-envelope-fill me-2"></i>
                mrfadlika248@raffifadlika.com
              </li>
              <li>
                <i className="bi bi-telephone-fill me-2"></i>0882-0208-02944
              </li>
            </ul>
            <div className="d-flex mt-3">
              <a href="#instagram" className="text-white me-3 fs-5 text-decoration-none">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#whatsapp" className="text-white me-3 fs-5 text-decoration-none">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="#telegram" className="text-white me-3 fs-5 text-decoration-none">
                <i className="bi bi-telegram"></i>
              </a>
              <a href="github" className="text-white fs-5 text-decoration-none">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </h5>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterMain;