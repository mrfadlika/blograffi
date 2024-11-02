import { h } from "preact";
import "./BlogKedua.styles.css";
import CodeEditor from "../../Context/CodeEditor";
import { useState } from "preact/hooks";
import { blogSeries, globalPath } from "./data_blogkedua";

const BlogKeduaPart1 = () => {
  const currentPath = window.location.pathname;
  const [answer, setAnswer] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === "true") {
      setModalMessage("Pintar banget lu asli!");
    } else if (answer === "false") {
      setModalMessage("Salah, belajar lagi ya!");
    } else {
      setModalMessage("Please select an answer");
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="blog-page container">
      <div className="blog-page header align-items-center">
        <h2 className="text-black">
          Tutorial Laravel API #1: Install dan Menjalankan Laravel 11
        </h2>
      </div>

      <div className="blog-page row">
        <div className="blog-page leftcolumn">
          <div className="blog-page card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvD-_e6KULLAtEtg16vKPZJmATkdXiZi09Q&s"
              alt="Laravel 11 API"
              style={{ height: "200px", marginBottom: "30px" }}
            />
            <ul class="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>Laravel API Part 1</li>
            </ul>
            <h2>Tutorial Laravel API</h2>
            <h6>Raffi Fadlika, Oct 20, 2024</h6>
            <p
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                marginTop: "20px",
              }}
            >
              Halo teman teman, pada seri blog kali ini kita akan membahas
              tentang Restfull API Laravel 11 untuk para pemula. Pada blog
              series ini memanfaatkan fitur bawaan dari Laravel yang bernama API
              Resources. Dengan menggunakan API Resources kita bisa
              mentransformasi data dari Model menjadi format JSON dengan sangat
              mudah dan cepat.
            </p>
            <h4>Instalasi Laravel</h4>
            <p>
              Hal pertama yang mesti kita lakukan adalah melakukan instalasi
              composer di dalam komputer. Untuk melakukan instalasi composer
              teman teman dapat menginstall yang diperlukan di website resminya
            </p>
            <p>
              1. Instal Laragon:{" "}
              <a href="https://laragon.org/download/">
                https://laragon.org/download
              </a>
              <br />
              2. Install PHP:{" "}
              <a href="https://windows.php.net/downloads/releases">
                https://windows.php.net/downloads/releases
              </a>
            </p>
            <p>
              Setelah selesai melakukan instalasi kita mulai memasuki
              konfigurasi laravel.
            </p>
            <p>
              Ekstrak File PHP yang telah didownload, dan paste di file laragon,
              defaultnya berada pada <strong>C:\laragon\bin\php</strong>
              <br />
              Pada Laragon, nyalakan dengan menekan <strong>Start All</strong>,
              kemudian buka terminal dan ketikkan
            </p>
            <CodeEditor
              fileName="bash"
              code={`composer create-project --prefer-dist laravel/laravel:^11.0 laravel11-api`}
            />
            <p>
              Jika ada error tidak masalah lanjut saja, Masuk pada directory
              laravel11-api yang telah dibuat
            </p>
            <CodeEditor fileName="bash" code={`cd laravel11-api`} />
            <p>
              Setelah berhasil masuk di folder project, jalankan perintah
              berikut pada terminal lagi
            </p>
            <CodeEditor fileName="bash" code={`php artisan serve`} />
            <p>
              Kemudian kembali ke laragon dan buka tab database, kemudian masuk
              pada sesi yang telah ada (jika tidak ada silahkan buat dengan
              menekan <strong>New</strong> dikiri bawah), dan setelah masuk ke
              sesi, klik kanan di bar seri (bagian kiri) kemudian pilih "Create
              New" lalu pilih "Database", jika teman teman menggunakan tab
              bahasa Indonesia, klik kanan kemudian pilih "Buat Baru" kemudian
              pilih "Database". kemudian masukkan nama database yaitu
            </p>
            <CodeEditor fileName="bash" code={`laravel11-api`} />
            <p>
              Kemudian teman teman silahkan buka IDE teman teman masing masing,
              bebas mau itu menggunakan VSCODE, SUBLIME, CURSOR, silahkan
              dibuka. <br />
              Buka folder laravel11-api biasanya berada pada folder{" "}
              <strong>C:\laragon\www\laravel11-api</strong>
              <br />
              Setelah folder terbuka, silahkan pergi ke file .env, kemudian ubah
              di baris 22 ubah code menjadi seperti ini
            </p>
            <CodeEditor
              fileName=".env"
              code={`#hilangkan #
DB_CONNECTION=mysql
DB_HOST=127.0.0.1 
DB_PORT=3306
DB_DATABASE=laravel11-api
DB_USERNAME=root
DB_PASSWORD=`}
            />
            <p>Kemudian, jalankan lagi</p>
            <CodeEditor fileName="bash" code={`php artisan serve`} />
            <p>
              Masuk ke browser dan ketikkan localhost:8000 dan setelah muncul
              tekan <strong>RUN MIGRATIONS</strong>, jika tidak ada teman teman
              ke terminal laragon kemudian Ctrl + C lalu ketikkann
            </p>
            <CodeEditor fileName="bash" code={`php artisan migrate`} />
            <p>Kemudian jalankan lagi</p>
            <CodeEditor fileName="bash" code={`php artisan serve`} />
            <p>
              Jika teman teman telah berhasil maka akan menghasilkan seperti
              berikut
            </p>
            <img src="/hasil1.png" alt="hasil1" style={{ width: "100%" }} />
            <h4 style={{ marginTop: "50px" }}>Menjalankan Storage Link</h4>
            <p>
              Setelah berhasil membuat dan menjalankan project laravel, sekarang
              kita lanjutkan dengan menjalankan perintah{" "}
              <code>storage:link</code> di Laravel
            </p>
            <strong>Apa itu Storage Link?</strong>
            <p>
              Storage Link digunakan untuk melakukan symlink atau melakukan link
              sebuah folder didalam project laravel.
            </p>
            <p>
              Di Laravel, kita hanya bisa mengakses file file yang berada pada
              folder <code>public</code>, sedangkan file yang akan diupload akan
              berada dalam folder <code>storage</code>. Oleh karena itu, kita
              perlu melakukan link dari folder storage ke folder public. Dengan
              begitu, kita bisa mengakses file yang telah diupload tersebut.
              Silahkan teman teman jalankan perintah berikut di terminal yang
              sudah berada pada project laravelnya
            </p>
            <CodeEditor fileName="bash" code="php artisan storage:link" />
            <p>
              Selamat teman teman sudah berhasil menginstall dan menjalankan
              project laravel teman teman sekalian, untuk selanjutnya kita akan
              membahas tentang model dan migrasi. <strong>Sampai Jumpa</strong>
            </p>
          </div>
        </div>
        <div className="blog-page rightcolumn">
          {/* <div className="blog-page card">
            <h2>About Me</h2>
            <div className="fakeimg" style={{ height: "100px" }}>
              Image
            </div>
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div> */}
          <div className="sticky-container">
            <div className="blog-page card">
              <h3>Daftar Seri Blog</h3>
              <hr />
              <div className="series-item">
                {blogSeries.map((blog, index) => (
                  <div
                    key={index}
                    className={`blog-page ${
                      currentPath === globalPath + blog.id
                        ? "selected"
                        : "unselected"
                    }`}
                    onClick={() =>
                      blog.status === "ready"
                        ? (window.location.href = `/laravel-api/${blog.id}`)
                        : (window.location.href = "/coming-soon/")
                    }
                    style={{ marginTop: "10px", marginBottom: "5px" }}
                  >
                    {blog.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-page card">
              <h3>Follow Me</h3>
              <p>
                <a
                  className="btn btn-primary"
                  href="https://www.instagram.com/mr.fadlika/"
                  style={{ marginRight: "10px", marginBottom: "5px" }}
                >
                  <i
                    className="bi bi-instagram"
                    style={{ marginRight: "5px" }}
                  ></i>
                  Instagram
                </a>
                <a
                  className="btn btn-primary"
                  href="https://www.github.com/mrfadlika/"
                >
                  <i
                    className="bi bi-github"
                    style={{ marginRight: "5px" }}
                  ></i>
                  GitHub
                </a>
              </p>
              <p style={{ marginTop: "-5px" }}>
                Mau diskusi? <a href="https://wa.me/62882020802944">WhatsApp</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-page footer">
        <img
          src="https://avatars.githubusercontent.com/u/101388811?v=4"
          alt="Raffi Fadlika"
          className="rounded-circle"
          style={{ width: "100px", height: "100px", marginBottom: "0px" }}
        />
        <div className="blog-page tulisan">
          <h2>Raffi Fadlika</h2>
          <p>Fullstack Developer</p>
        </div>
        <div className="blog-page sebelah-kanan">
          <p>
            Suka dengan tulisan saya? Kamu bisa memberikan dukungan dengan
            berdonasi atau bagikan konten ini di sosial media. Terima kasih atas
            dukungannya!
          </p>
          <a className="btn btn-primary" href="https://saweria.co/raffifadlika">
            Donasi Saweria
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogKeduaPart1;
