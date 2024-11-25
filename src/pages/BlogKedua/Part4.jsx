import { h } from "preact";
import "./BlogKedua.styles.css";
import CodeEditor from "../../Context/CodeEditor";
import { useState } from "preact/hooks";
import { blogSeries, globalPath } from "./BlogKedua.hooks";
import Footer from "../../Context/Footer";

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
      <div className="blog-page header align-items-center border-0 shadow">
        <h2 className="text-black">
          Tutorial Laravel API #4: Menampilkan Data dari Database dengan Metode
          GET
        </h2>
      </div>

      <div className="blog-page row">
        <div className="blog-page leftcolumn">
          <div className="blog-page card border-0 shadow">
            <img
              src="/banner2.png"
              alt="Laravel 11 API"
              style={{ height: "200px", marginBottom: "30px" }}
            />
            <ul class="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/laravel-api">Blog</a>
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
            <p>
              Jika perintah diatas dijalankan, maka akan secara otomatis
              mengunduh library yang bernama <code>sanctum</code>, tapi tidak
              akan menggunakan library itu saat ini. Dan sekarang route untuk
              Rest API sudah tersedia didalam folder <code>routes/api.php</code>
            </p>
            <img
              src="/ss-larapel1.png"
              alt="Laravel API Installed"
              style={{ borderRadius: "10px", marginBottom: "20px" }}
            />
            <p>
              Sekarang teman teman silahkan buka file{" "}
              <code>routes/api.php</code> kemudian ubah codenya menjadi seperti
              berikut ini
            </p>
            <CodeEditor
              fileName={"routes/api.php"}
              code={`<?php

use Illuminate\\Auth\\Middleware\\Authenticate;
use Illuminate\\Http\\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware(Authenticate::using('sanctum'));

//posts
Route::apiResource('/posts', App\Http\Controllers\Api\PostController::class);`}
            />
            <p>
              Di atas, kita menambahkan route baru dengan jenis{" "}
              <code>apiResource</code> dan memiliki path <code>/posts</code>.
              Untuk memastikan route tersebut berhasil ditambahkan teman teman
              bisa menjalankan di terminal
            </p>
            <CodeEditor code={"php artisan route:list"} />
            <img
              src="/ss-larapel2.png"
              alt="Laravel Route List"
              style={{ borderRadius: "10px", marginBottom: "20px" }}
            />
            <p>
              Untuk route <code>/posts</code> sudah berhasil untuk ditambahkan
            </p>
            <h4>Uji Coba Rest API</h4>
            <div className="container-pengingat">
              <p style={{ marginBottom: "-5px" }}>
                Unduh Postman:{" "}
                <a href="https://www.postman.com/downloads/">
                  https://www.postman.com/downloads/
                </a>
              </p>
            </div>
            <p>
              Sekarang teman teman silahkan buka aplikasi Postman, kemudian
              masukkan URL berikut ini https://localhost:8000/api/posts untuk
              methodnya silahkan pilih GET
            </p>
            <p>
              Jika sudah, silahkan klik <code>send</code> dan jika berhasil maka
              teman teman akan mendapatkan hasil seperti berikut ini
            </p>
            <CodeEditor
              code={`{
    "success": true,
    "message": "List Data Posts",
    "data": {
        "current_page": 1,
        "data": [],
        "first_page_url": "http://localhost:8000/api/posts?page=1",
        "from": null,
        "last_page": 1,
        "last_page_url": "http://localhost:8000/api/posts?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://localhost:8000/api/posts?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": null,
        "path": "http://localhost:8000/api/posts",
        "per_page": 5,
        "prev_page_url": null,
        "to": null,
        "total": 0
    }
}`}
            />
            <img
              src="/ss-postman1.png"
              alt="Postman First GET"
              style={{ borderRadius: "10px", marginBottom: "20px" }}
            />
            <p>
              Di atas, kita masuk belum mendapat data apapun, karena memang kita
              belum memiliki data pada database, dan data yang ditampilkan
              adalah array kosong.
            </p>
            <CodeEditor code={`data = []`} />
            <p>
              Selamat teman teman, pada seri kali ini telah berhasil menampilkan
              data dari database menggunakan method GET didalam Laravel 11. Pada
              seri selanjutnya kita akan membahas cara Insert data dengan metode
              POST dari database,<strong> Sampai Jumpa. </strong>
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
            <div className="blog-page card border-0 shadow">
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
                      (window.location.href = globalPath + blog.id)
                    }
                    style={{ marginTop: "10px", marginBottom: "5px" }}
                  >
                    {blog.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-page card border-0 shadow">
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

      <Footer />
    </div>
  );
};

export default BlogKeduaPart4;
