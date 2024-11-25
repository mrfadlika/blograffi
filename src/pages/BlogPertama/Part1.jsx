import { h } from "preact";
import "./BlogPertama.styles.css";
import CodeEditor from "../../Context/CodeEditor";
import { useState } from "preact/hooks";
import Modal from "../../Context/Modal";
import Footer from "../../Context/Footer";

const BlogPertamaPart1 = () => {
  const codeSnippetPertama = `#include <iostream>
#include <string>

using namespace std;

void myFunction(string fname) {
  cout << fname << " Refsnes" << endl;
}

int main() {
  myFunction("Liam");
  myFunction("Jenny");
  myFunction("Anja");
  return 0;
}

//Output : Liam Refsnes
//         Jenny Refsnes
//         Anja Refsnes
  `;

  const blogSeries = [
    {
      title: "Tutorial Coding OOP di Java #1: Apa itu OOP?",
      link: "/oopjava/1",
    },
    {
      title:
        "Tutorial Coding OOP di Java #2: Mengenal Atribut, Method dan Constructor",
      link: "/oopjava/2",
    },
    {
      title: "Tutorial Coding OOP di Java #3: Modifier dan Packages",
      link: "/oopjava/3",
    },
  ];

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
          Tutorial Coding OOP di Java #1: Apa itu OOP?
        </h2>
      </div>

      <div className="blog-page row">
        <div className="blog-page leftcolumn">
          <div className="blog-page card border-0 shadow">
            <img
              src="/banner1.png"
              alt="OOP"
              style={{
                height: "200px",
                width: "100%",
                marginBottom: "30px",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "10px",
              }}
              onLoad={(e) =>
                console.log(
                  "Image dimensions:",
                  e.target.width,
                  "x",
                  e.target.height
                )
              }
            />

            <ul class="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/oopjava">Blog</a>
              </li>
              <li>OOP Java Part 1</li>
            </ul>
            <h2>Coding OOP in Java</h2>
            <h6>Raffi Fadlika, Oct 9, 2024</h6>
            <p
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                marginTop: "20px",
              }}
            >
              Era digital saat ini memang sangat banyak pengetahuan dan wawasan
              mengenai bahasa Pemograman, salah satunya adalah ilmu tentang
              Object-Oriented Programming di Bahasa Pemrograman Java, tetapi
              sebelum memulai teman teman harus bisa membedakan yang mana
              Method, yang mana Class, dan yang mana Object, mari kita jelaskan
              saja
            </p>
            <h4>Method</h4>
            <p>
              Method adalah sebuah fungsi yang ada di dalam sebuah class, method
              ini berfungsi untuk melakukan sebuah aksi atau tugas tertentu.
            </p>
            <h4>Class</h4>
            <p>
              Class adalah sebuah blueprint atau template untuk membuat sebuah
              object.
            </p>
            <h4>Object</h4>
            <p>Object adalah sebuah instance dari sebuah class.</p>
            <p>
              Pemrograman Berorientasi Objek (PBO) adalah paradigma pemrograman
              yang berfokus pada objek-objek yang terkait dan interaksi antara
              objek-objek tersebut. Untuk context scripting hampir mirip dengan
              pemrograman C++ yang dimana terdapat fungsi, struct dan variabel
              Pada pemrograman C++ teman teman jika menginisialisasi fungsi
              yaitu dengan
            </p>
            <CodeEditor fileName="c++" code={codeSnippetPertama} />
            <p>
              Dari Code diatas dapat dilihat bahwa fungsi myFunction() dipanggil
              pada main function dengan parameter yang berbeda beda. Parameter
              yang di myFunction tidak dideklarasikan tapi dideklarasikan pada
              main function. Itulah gunanya parameter pada fungsi. Pada
              Object-Oriented Programming di Java, kita bisa melakukan hal yang
              serupa pada Method yang ditaruh didalam object dan dipanggil oleh
              object pada object main
            </p>
            <CodeEditor
              fileName="java"
              code={`public static void main(String[] args) {
  //inisialisasi object
}`}
            />
            <p>
              Jika teman teman sudah mengerti tentang parameter pada fungsi,
              teman teman bisa mengerti tentang inisialisasi object dan
              memanggil method yang ada di dalam object tersebut.
            </p>
            <h4>Pemrograman Berorientasi Objek (PBO) di Java</h4>
            <p
              style={{
                marginBottom: "-10px",
              }}
            >
              <strong>Buat Class</strong>
            </p>
            <p>
              Untuk membuat class harus ada keyword <code>Class</code> <br />
              Buat class dengan nama <code>Main</code> dan nama file harus sama
              dengan nama class yaitu Main.java
            </p>
            <CodeEditor
              fileName="java"
              code={`public class Main {
  int x = 5;
}`}
            />
            <p
              style={{
                marginBottom: "-10px",
              }}
            >
              <strong>Buat Object</strong>
            </p>
            <p>
              Di Java, object dibuat dari sebuah class. Kita telah membuat class
              bernama <code>Main</code>, jadi sekarang kita bisa membuat object
              <br />
              Untuk membuat object dari class <code>Main</code> perjelas nama
              class dan diikuti dengan nama object dan gunakan keyword{" "}
              <code>new</code>
            </p>
            <CodeEditor
              fileName="java"
              code={`public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}`}
            />
            <p
              style={{
                marginBottom: "-10px",
              }}
            >
              <strong>Gandakan Object</strong>
            </p>
            <p>
              Di Java, kamu bisa menggandakan object, dan membuat object dengan
              banyak hanya dari 1 class
            </p>
            <p
              style={{
                marginTop: "-2px",
              }}
            >
              Example: Membuat dua object dari class <code>Main</code>
            </p>
            <CodeEditor
              fileName="java"
              code={`public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj1 = new Main();
    Main myObj2 = new Main();
    System.out.println(myObj1.x);
    System.out.println(myObj2.x);
  }
}`}
            />
            <p
              style={{
                marginBottom: "-10px",
              }}
            >
              <strong>Menggunakan Banyak Class</strong>
            </p>
            <p>
              Di Java, kamu juga bisa membuat banyak class, dan mengaksesnya di
              class yang lain. Hal ini sering digunakan untuk pengorganisasian
              kelas yang lebih baik (satu kelas memiliki semua atribut dan
              method, sementara kelas lain menampung method main(), tempat code
              dieksekusi) <br />
              Sebelum memulai pastikan kita membuat 2 class yang berbeda yaitu{" "}
              <code>second</code> dan <code>main</code>
            </p>
            <CodeEditor
              fileName="Main.java"
              code={`class second {
  int x = 5;
}

public class Main {
  public static void main(String[] args) {
    second myObj1 = new second();
    second myObj2 = new second();
    System.out.println(myObj1.x);
    System.out.println(myObj2.x);
  }
}`}
            />
            <div className="container mt-1">
              <div className="card bg-secondary-subtle text-black">
                <div className="card-body text-center">
                  <h3 className="card-title">Exercise</h3>
                  <p className="text-center">
                    True or False: <br /> Hanya ada 1 method main() pada setiap
                    program Java
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    className="d-flex flex-column align-items-center"
                  >
                    {/* True option */}
                    <label
                      className="form-check p-2 mb-2 w-50 d-flex justify-content-center align-items-center bg-secondary rounded jawaban-dihover"
                      htmlFor="trueAnswer"
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="answer"
                        id="trueAnswer"
                        value="true"
                        onChange={(e) => setAnswer(e.target.value)}
                        style={{ transform: "scale(1.5)" }}
                      />
                      <span
                        className="ms-3 text-white"
                        style={{ fontSize: "1.2rem" }}
                      >
                        True
                      </span>
                    </label>

                    {/* False option */}
                    <label
                      className="form-check p-2 mb-3 w-50 d-flex justify-content-center align-items-center bg-secondary rounded jawaban-dihover"
                      htmlFor="falseAnswer"
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="answer"
                        id="falseAnswer"
                        value="false"
                        onChange={(e) => setAnswer(e.target.value)}
                        style={{ transform: "scale(1.5)" }}
                      />
                      <span
                        className="ms-3 text-white"
                        style={{ fontSize: "1.2rem" }}
                      >
                        False
                      </span>
                    </label>

                    <button type="submit" className="btn btn-success mt-3">
                      Submit Answer »
                    </button>
                  </form>
                </div>
              </div>
              {isModalOpen && (
                <Modal
                  message={modalMessage}
                  onClose={closeModal}
                  answer={answer}
                />
              )}
            </div>
            <br />
            <br />
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
              {blogSeries.map((blog, index) => (
                <div
                  key={index}
                  className={`blog-page ${
                    currentPath === blog.link ? "selected" : "unselected"
                  }`}
                  onClick={() => (window.location.href = blog.link)}
                  style={{ marginTop: "10px", marginBottom: "5px" }}
                >
                  {blog.title}
                </div>
              ))}
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

export default BlogPertamaPart1;
