import { h } from "preact";
import "./BlogKedua.styles.css";
import CodeEditor from "../../Context/CodeEditor";
import { useState } from "preact/hooks";
import { blogSeries, globalPath } from "./BlogKedua.hooks";

const BlogKeduaPart2 = () => {
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
          Tutorial Laravel API #2: Membuat Model dan Migration
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
                <a href="/laravel-api">Blog</a>
              </li>
              <li>Laravel API Part 2</li>
            </ul>
            <h2>Tutorial Laravel API</h2>
            <h6>Raffi Fadlika, Oct 24, 2024</h6>
            <p
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                marginTop: "20px",
              }}
            >
              Halo teman teman, pada blog sebelumnya kita telah membahas tentang
              bagaimana cara membuat project Laravel dan menjalankannya. Pada
              blog kali ini kita akan membahas tentang cara membuat Model dan
              Migration di dalam Laravel Kita juga akan belajar bagaimana
              menambahkan Accessor didalam model Laravel, tujuannya untuk
              membuat path dari gambar yang kita upload menghasilkan url yang
              penuh (full path).
            </p>
            <h4>Membuat Model dan Migration</h4>
            <p>
              Sekarang kita lanjutkan belajar membuat model dan migration di
              dalam Laravel. Untuk membuat Model dan Migration kita bisa
              menggunakan perintah <code>make:model</code>. Silahkan teman teman
              jalankan pada terminal dan pastikan sudah berada di dalam project
              Laravelnya
            </p>
            <CodeEditor
              fileName="bash"
              code={`php artisan make:model Post -m`}
            />
            <p>
              Jika berhasil, kita mendapatkan 2 file baru yang berada di dalam
              folder project <br />
              1. <code>app/Models/Post.php</code>
              <br />
              2.{" "}
              <code>
                database/migrations/xxxx_xx_xx_xxxxxx_create_posts_table.php
              </code>{" "}
              (x berisikan waktu dijalankannya migrasi)
            </p>
            <h4>Menambahkan Field/Kolom</h4>
            <p>
              Sekarang kita lanjutkan menambahkan field/kolom didalam file
              migration. Silahkan teman teman buka file{" "}
              <code>xxxx_xx_xx_xxxxxx_create_posts_table.php</code>, kemudian
              pada <code>function up ubah kodenya menjadi seperti ini</code>
            </p>
            <CodeEditor
              fileName="xxxx_xx_xx_xxxxxx_create_posts_table.php"
              code={`public function up(): void
{
    Schema::create('posts', function (Blueprint $table) {
        $table->id();
        $table->string('image');
        $table->string('title');
        $table->text('content');
        $table->timestamps();
    });
}`}
            />
            <p>
              Diatas, kita telah menambahkan 3 field baru didalam migration
              yaitu image, title, dan content. Berikut ini detailnya
            </p>
            <table className="bordered-table">
              <tr>
                <th>Field/Kolom</th>
                <th>Tipe Data</th>
                <th>Keterangan</th>
              </tr>
              <tr>
                <td>
                  <code>image</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>untuk menyimpan nama file gambar yang diupload </td>
              </tr>
              <tr>
                <td>
                  <code>title</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>untuk menyimpan judul post</td>
              </tr>
              <tr>
                <td>
                  <code>content</code>
                </td>
                <td>
                  <code>text</code>
                </td>
                <td>untuk menyimpan isi post</td>
              </tr>
            </table>
            <h4 style={{ marginTop: "30px" }}>Menambahkan Mass Assignment</h4>
            <p>
              Karena field sudah berhasil untuk ditambahkan di dalam file
              migration, maka langkah berikutnya adalah menambahkan Mass
              Assignment di dalam Model. Ini bertujuan agar field yang sudah
              kita tambahkan diatas dapat menyimpan sebuah nilai
            </p>
            <p>
              Silahkan dibuka file <code>app/Models/Post.php</code>, kemudian
              ubah semua codenya menjadi seperti berikut ini
            </p>
            <CodeEditor
              fileName="app/Models/Post.php"
              code={`<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    
    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'image',
        'title',
        'content',
    ];
}`}
            />
            <p>
              Dari perubahan code diatas, kita menambahkan properti baru dengan
              nama <code>$fillable</code>. Properti tersebut disebut dengan Mass
              Assignment dan didalamnya kita berikan field field yang sudah kita
              buat sebelumnya di file migration
            </p>
            <h4>Menjalankan Proses Migrate</h4>
            <p>
              Setelah semua berhasil dibuat, maka langkah berikutnya adalah
              menjalankan perintah migrate. Dengan menjalankan perintah ini,
              maka database akan digenerate beserta table dan juga fieldnya
            </p>
            <p>Silahkan dijalankan di terminalnya</p>
            <CodeEditor fileName={"bash"} code={`php artisan migrate`} />
            <p>
              Jika muncul pertanyaan seperti berikut ini, maka silahkan pilih{" "}
              <code>Yes</code> dan <strong>Enter</strong>
            </p>
            <CodeEditor
              fileName={`bash`}
              code={`
WARN  The database 'laravel11-api' does not exist on the 'mysql' connection.

Would you like to create it? (yes/no) [yes]`}
            />
            <p>
              Setelah berhasil, jika teman teman cek didalam{" "}
              <strong>phpMyAdmin</strong> di{" "}
              <a href="http://localhost/phpmyadmin">
                http://localhost/phpmyadmin
              </a>
              , maka database kita akan digenerate beserta table dan fieldnya
            </p>
            <img
              src="/sc_phpmyadmin.png"
              alt="phpmyadmin view"
              style={{
                width: "100%",
                marginBottom: "20px",
                borderRadius: "10px",
              }}
            />
            <h4>Menambahkan Accessor di Model</h4>
            <p>
              Accessor memungkinkan kita mengubah nilai saat field diakses.
              Untuk mendefinisikan accessor, kita bisa membuat method didalam
              Model untuk menentukan field yang akan diakses.
            </p>
            <div
              className="container-pengingat"
              style={{ marginBottom: "20px", marginTop: "-10px" }}
            >
              <h4>Aturan Penamaan Accessor</h4>
              <p>
                <hr />
                Penamaan method yang dibuat harus sama dengan nama field yang
                akan di format dan menggunakan <code>CamelCase</code>.
              </p>
            </div>
            <p>
              Sekarang kita akan membuat Accessor di dalam Model untuk field{" "}
              <code>image</code>, jadi silahkan teman teman buka file{" "}
              <code>app/Models/Post.php</code>, kemudian ubah codenya menjadi
              seperti berikut ini
            </p>
            <CodeEditor
              fileName={"app/Models/Post.php"}
              code={`<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;

    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'image',
        'title',
        'content',
    ];

    /**
     * image
     *
     * @return Attribute
     */
    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($image) => url('/storage/posts/' . $image),
        );
    }
}`}
            />
            <p>
              Dari perubahan kode diatas, pertama kita import cast{" "}
              <code>Attribute</code>
            </p>
            <CodeEditor
              code={`use Illuminate\Database\Eloquent\Casts\Attribute;`}
            />
            <p>
              Kemudian kita membuat method baru dengan nama <code>image()</code>
              . Didalam method ini kita melakukan return field{" "}
              <code>image</code> agar menghasilkan full path URL dari folder
              storage. Jadi ketika kita memanggil field <code>image</code> maka
              akan otomatis menghasilkan output seperti berikut ini
            </p>
            <CodeEditor
              code={`domainkalian.com/storage/posts/nama_file_image.png`}
            />
            <p>
              Tapi, jika tidak menggunakan fitur Accessor, maka hasilnya hanya
              akan seperti berikut ini
            </p>
            <CodeEditor code={`nama_file_image.png`} />
            <p>
              Selamat teman teman telah belajar banyak hal pada seri kali ini,
              pada seri selanjutnya kita akan membahas bagaimana cara membuat
              API Resources didalam Laravel, yang digunakan untuk mengubah model
              menjadi format JSON. <strong>Sampai Jumpa</strong>
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
<<<<<<< HEAD
                    onClick={() =>
                      (window.location.href = globalPath + blog.id)
                    }
=======
                    onClick={() =>(window.location.href = `/laravel-api/${blog.id}`)}
>>>>>>> 0a4ec2c531c2a2338a7c1e4531880df1d49aa56d
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

export default BlogKeduaPart2;
