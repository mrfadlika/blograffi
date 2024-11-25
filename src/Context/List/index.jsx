import React, { useState } from "react";

const ListPage = ({
  tutorials = [],
  title,
  description,
  descriptionContent,
  image
}) => {
  const [activeTab, setActiveTab] = useState("tutorial");
  const currentPath = window.location.pathname;
  const handleTabChange = (tab, e) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  const socialLinks = [
    { icon: "whatsapp", url: "https://wa.me/62882020802944" },
    { icon: "github", url: "https://github.com/mrfadlika" },
    { icon: "telegram", url: "https://t.me/mrfadlika" },
    { icon: "instagram", url: "https://instagram.com/mr.fadlika" },
  ];

  return (
    <div style={{ backgroundColor: "whitesmoke", minHeight: "100vh" }}>
      <div className="bg-white py-5 shadow">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
                <img src={image} style={{ width: "200px", height: "200px", borderRadius: "10px" }} />
            </div>

            <div className="col-md-9">
              <h1 className="fw-bold mb-3">{title}</h1>
              <p className="text-secondary mb-4">{description}</p>

              <div className="d-flex gap-3">
                <button className="btn btn-primary">
                  <i className="bi bi-collection me-2"></i>
                  {tutorials.length} TUTORIAL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-8">
            <div className="card shadow border-0">
              <div className="card-header bg-white">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        activeTab === "tutorial" ? "active" : ""
                      }`}
                      href="#"
                      onClick={(e) => handleTabChange("tutorial", e)}
                    >
                      <i className="bi bi-collection me-2"></i>
                      TUTORIAL
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        activeTab === "description" ? "active" : ""
                      }`}
                      href="#"
                      onClick={(e) => handleTabChange("description", e)}
                    >
                      <i className="bi bi-info-circle me-2"></i>
                      DESCRIPTION
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                {activeTab === "tutorial" && (
                  <div className="list-group list-group-flush">
                    {tutorials.map((tutorial, index) => (
                      <a
                        key={index}
                        href={`${currentPath}/${index + 1}`}
                        className="list-group-item list-group-item-action"
                      >
                        {`${index + 1}. ${tutorial}`}
                      </a>
                    ))}
                  </div>
                )}

                {activeTab === "description" && (
                  <div className="p-3">
                    <h5 className="mb-3">Deskripsi Singkat</h5>
                    <p>{descriptionContent.intro}</p>
                    <ul className="list-unstyled ps-3">
                      {descriptionContent.points.map((point, index) => (
                        <li key={index} className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <p>{descriptionContent.conclusion}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0">
              <div className="card-header bg-white">
                <h5 className="mb-0">
                  <i className="bi bi-person-badge me-2"></i>
                  DISUSUN OLEH
                </h5>
              </div>
              <div className="card-body text-center">
                <div className="mb-3">
                  <div
                    className="bg-light rounded-circle mx-auto d-flex align-items-center justify-content-center"
                    style={{ width: "120px", height: "120px" }}
                  >
                    <img src="https://avatars.githubusercontent.com/u/101388811?v=4" alt="Raffi Fadlika" className="rounded-circle" style={{ width: "120px", height: "120px", marginBottom: "0px" }} />
                  </div>
                </div>
                <h5 className="card-title">Raffi Fadlika</h5>
                <p className="card-text text-secondary small">
                  Full-stack Developer
                </p>
                <div className="d-flex justify-content-center gap-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="btn btn-outline-secondary btn-sm rounded-circle"
                    >
                      <i className={`bi bi-${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
