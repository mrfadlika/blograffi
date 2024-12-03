const FooterMain = () => (
  <footer className="bg-secondary text-center" style={{ marginTop: "auto" }}>
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
);

export default FooterMain;