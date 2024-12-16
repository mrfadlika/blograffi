import { useState, useEffect } from "preact/hooks";
import { Link } from "preact-router";
import "./StackPertama.styled.css";
import FooterMain from "../../../Context/Footer/Footer.Main";

const StackPertama = () => {
  return (
    <>
      <div className="container-fluid text-center py-5 header-section">
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

      <div className="stack-container">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/" className="text-decoration-none">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/stack-over" className="text-decoration-none">Stack Over</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Laravel Unknown Collation
            </li>
          </ol>
        </nav>

        <div className="error-detail-card">
          <h1 className="text-dark mb-4">Laravel : Unknown collation: 'utf8mb4_0900_ai_ci'</h1>
          
          <div className="code-preview mb-4">
            <img 
              src="/ss-larapel1.png" 
              alt="Error Screenshot" 
              className="img-fluid rounded"
            />
          </div>

          <div className="error-description mb-4">
            <p>
              Jika teman-teman mendapatkan error <code>Unknown collation: 'utf8mb4_0900_ai_ci'</code> saat 
              menjalankan proses migrate di Laravel, maka teman-teman bisa mencoba solusi berikut ini.
            </p>
            <p className="mb-2">Terima Kasih</p>
            <small className="text-muted">Dilihat sebanyak 1.852 kali</small>
          </div>

          <div className="tags mb-4">
            <span className="badge me-2" style={{ backgroundColor: '#FF2D20' }}>Laravel</span>
            <span className="badge me-2" style={{ backgroundColor: '#13aa52' }}>Database</span>
          </div>

          <div className="solutions-section">
            <h2 className="d-flex align-items-center mb-4">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              SOLUTIONS
            </h2>
            
            <p className="text-muted fst-italic mb-4">
              Berikut ini adalah beberapa solusi yang mungkin bisa membantu kamu.
            </p>

            <div className="solution-card">
              <div className="solution-header mb-3">
                <span className="badge bg-success">
                  <i className="bi bi-check-circle-fill me-1"></i>
                  SOLUTION #1
                </span>
              </div>

              <p>
                Silahkan teman-teman tambahkan kode berikut ini di dalam file <code>.env</code>, atau
                tepatnya dibawah kode <code>DB_PASSWORD=</code>
              </p>

              <div className="code-block mb-3">
                <pre className="bg-dark text-light p-3 rounded">
                  <code>DB_COLLATION=utf8mb4_unicode_ci</code>
                </pre>
              </div>

              <p>Sekaranm silahkan teman-teman lakukan proses migrate ulang.</p>
              <p>Terima Kasih</p>
            </div>
          </div>
        </div>

        <div className="bottom-navigation mt-4 d-flex justify-content-between align-items-center">
          <Link 
            href="/stack-over" 
            className="btn btn-outline-secondary d-inline-flex align-items-center"
          >
            <i className="bi bi-arrow-left me-2"></i>
            Kembali
          </Link>

          <div className="d-flex gap-2">
            <button 
              className="btn btn-outline-primary d-inline-flex align-items-center"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <i className="bi bi-arrow-up me-2"></i>
              Ke Atas
            </button>
            
            <Link 
              href="/stack-over" 
              className="btn btn-primary d-inline-flex align-items-center"
            >
              Lihat Error Lainnya
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
      <FooterMain />
    </>
  );
};

export default StackPertama;