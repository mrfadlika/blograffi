import { h } from "preact";
import "./BlogKedua.styles.css";
import CodeEditor from "../../Context/CodeEditor";
import { useState } from "preact/hooks";
import { blogSeries, globalPath } from "./data_blogkedua";

const BlogKeduaPart4 = () => {
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
          Tutorial Laravel API #4: Menampilkan Data dari Database dengan Metode
          GET
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
              <li>Laravel API Part 4</li>
            </ul>
            <h2>Tutorial Laravel API</h2>
            <h6>Raffi Fadlika, Oct 26, 2024</h6>
            <p style={{ marginTop: "5px" }}>
              Halo teman teman, pada seri blog kali ini kita akan membahas
              tentang menampilkan list data posts dari database didalam Laravel
              11 dengan format JSON
            </p>
            <h4>Membuat Controller Post</h4>
            <p>
              Sekarang, silahkan teman teman jalankan perintah berikut pada
              terminal dan pastikan sudah berada didalam directory project
              laravelnya
            </p>
            <CodeEditor
              fileName={"bash"}
              code={"php artisan make:controller Api/PostController"}
            />
            <p>
              Jika perintah diatas berhasil, maka kita akan mendapatkan file
              baru yang berada pada folder{" "}
              <code>app/Http/Controllers/Api/PostController.php</code>. Silahkan
              buka file tersebut, kemudian ubah semua codenya menjadi seperti
              berikut ini
            </p>
            <CodeEditor
              fileName={"app/Http/Controllers/Api/PostController.php"}
              code={`<?php

namespace App\\Http\\Controllers\\Api;

//import model Post
use App\\Models\\Post;

use App\\Http\\Controllers\\Controller;

//import resource PostResource
use App\\Http\\Resources\\PostResource;

class PostController extends Controller
{    
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        //get semua posts
        $posts = Post::latest()->paginate(5);

        //return collection of posts as a resource
        return new PostResource(true, 'List Data Posts', $posts);
    }
}`}
            />
            <p>
              Dari perubahan diatas, pertama kita import Model <code>Post</code>{" "}
              terlebih dahulu
            </p>
            <CodeEditor code={`use App\\Models\\Post;`} />
            <p>
              Setelah itu, kita import juga API Resource yang sudah kita buat
              sebelumnya, yaitu <code>PostResource</code>
            </p>
            <CodeEditor code={`use App\\Http\\Resources\\PostResource;`} />
            <p>
              Didalam class <code>PostController</code> kita dapat menambahkan
              method baru dengan nama index
            </p>
            <CodeEditor
              code={`public function index(){
    //...
}`}
            />
            <p>
              Di dalam method tersebut, kita melakukan get data dari database
              melalui Model <code>Post</code>
            </p>
            <CodeEditor code={`$posts = Post::latest()->paginate(5);`} />
            <p>
              Setelah itu kita parsing variabel <code>$posts</code> ke dalam{" "}
              <code>PostResource</code>
            </p>
            <CodeEditor
              code={`return new PostResource(true, 'List Data Project', $posts);`}
            />
            <h4>Membuat Route Rest API</h4>
            <p>
              Sejak Laravel 11 rilis, route <code>api</code> sudah tidak
              tersedia secara default saat proses instalasi. Tapi jangan
              khawatir, karena kita tinggal mempublishnya. Silahkan teman teman
              jalankan perintah di terminal dan pastikan sudah berada di dalam
              project laravelnya
            </p>
            <CodeEditor code={`php artisan install:api`} />
            Jika perintah diatas dijalankan, maka akan secara otomatis mengunduh
            library yang bernama <code>sanctum</code>, tapi tidak akan
            menggunakan library itu saat ini. Dan sekarang route untuk Rest API
            sudah tersedia didalam folder <code>routes/api.php</code>
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
                        ? (window.location.href = globalPath + blog.id)
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

export default BlogKeduaPart4;
