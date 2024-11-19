import { h } from "preact";
import "./BlogKedua.styles.css";
import CodeEditor from "../../Context/CodeEditor";
import { useState } from "preact/hooks";
import { blogSeries, globalPath } from "./BlogKedua.hooks";

const BlogKeduaPart3 = () => {
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
          Tutorial Laravel API #3: Membuat API Resources
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
              <li>Laravel API Part 3</li>
            </ul>
            <h2>Tutorial Laravel API</h2>
            <h6>Raffi Fadlika, Oct 26, 2024</h6>
            <p style={{ marginTop: "5px" }}>
              Halo teman teman, pada seri blog kali ini kita akan membahas
              tentang membuat API resource di Laravel 11. API Resources ini akan
              digunakan untuk mengubah data dari <i>Model</i> menjadi format
              JSON dengan cepat dan mudah
            </p>
            <div
              className="container-pengingat"
              style={{ marginTop: "-5px", marginBottom: "20px" }}
            >
              <p style={{ marginBottom: "-5px" }}>
                Selengkapnya{" "}
                <a href="https://laravel.com/docs/11.x/eloquent-resources">
                  https://laravel.com/docs/11.x/eloquent-resources
                </a>
              </p>
            </div>
            <h4>Membuat API Resources</h4>
            <p>
              Silahkan teman teman jalankan perintah berikut ini dalam terminal
              dan pastikan sudah berada pada directory project laravelnya
            </p>
            <CodeEditor
              fileName={`bash`}
              code={"php artisan make:resource PostResource"}
            />
            <p>
              Jika perintah berhasil dijalankan maka kita mendapatkan 1 file
              baru pada folder <code>app/Http/Resources/PostResource.php</code>
            </p>
            <h4>Custom Response</h4>
            <p>
              Sebenarnya, secara bawaan API Resource yang telah digenerate sudah
              bisa langsung digunakan, tapi karena kita akan menyesuaikan format
              JSON yang diinginkan, maka kita perlu melakukan sedikit modifikasi
              didalam file tersebut.
            </p>
            <p>
              Silahkan teman teman buka isi filenya yang bernamakan{" "}
              <code>app/Http/Resources/PostResource.php</code>, kemudian ubah
              semua codenya menjadi seperti ini
            </p>
            <CodeEditor
              fileName={"app/Http/Resources/PostResource.php"}
              code={`<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    //define properti
    public $status;
    public $message;
    public $resource;

    /**
     * __construct
     *
     * @param  mixed $status
     * @param  mixed $message
     * @param  mixed $resource
     * @return void
     */
    public function __construct($status, $message, $resource)
    {
        parent::__construct($resource);
        $this->status  = $status;
        $this->message = $message;
    }

    /**
     * toArray
     *
     * @param  mixed $request
     * @return array
     */
    public function toArray(Request $request): array
    {
        return [
            'success'   => $this->status,
            'message'   => $this->message,
            'data'      => $this->resource
        ];
    }
}`}
            />
            <p>
              Dari perubahan code diatas, kita menambahkan 3 properti, yaitu
            </p>
            <CodeEditor
              code={`//define property
public $status;
public $message;
public $resource;`}
            />
            <p>
              Properti ini digunakan untuk menyimpan status, pesan, dan data
              yang akan dikirimkan dalam respons JSON
            </p>
            <p>
              Kemudian, kita membuat method <code>__construct</code> yang
              menerima 3 parameter, yaitu <code>$status</code>,{" "}
              <code>$message</code>, dan <code>$resources</code>. Konstruktor
              ini akan dipanggil untuk menginisialisasikan nilai dari properti{" "}
              <code>$status</code> dan <code>$message</code> dengan nilai yang
              diberikan oleh controller nantinya
            </p>
            <CodeEditor
              code={`public function __construct($status, $message, $resource)
{
    parent::__construct($resource);
    $this->status  = $status;
    $this->message = $message;
}`}
            />
            <p>
              Setelah itu, didalam method <code>toArray</code> kita ubah bagian
              returnnya, tujuannya agar mengembalikan format JSON yang sesuai
              dengan kebutuhan. Jadi, tujuan dari <code>PostResource</code> ini
              adalah untuk membuat data dari Model <code>Post</code> ke dalam
              format JSON yang sesuai dengan kebutuhan, termasuk penambahan
              informasi status dan pesan tertentu.
            </p>
            <p>
              Selamat teman teman, pada seri kali ini telah berhasil
              mengimplementasikan cara membuat API Resources didalam Laravel 11
              dan belajar melakukan kostumisasi response JSON yang akan dibuat
              oleh API Resource tersebut. Pada seri selanjutnya kita akan
              membahas cara menampilkan data dengan metode GET dari database,{" "}
              <strong>Sampai Jumpa.</strong>
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
                      (blog.status === "ready"
                        ? (window.location.href = globalPath + blog.id)
                        : (window.location.href = '/coming-soon/'))
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

export default BlogKeduaPart3;
