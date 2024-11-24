import { h } from "preact";
import "./BlogPertama.styles.css";
import CodeEditor from "../../Context/CodeEditor";
import { useEffect, useState } from "preact/hooks";
import Modal from "../../Context/Modal";
import ExerciseComponent from "../../Context/Exercise/ExerciseComponent";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/clike/clike";
import { ExerciseProvider } from "../../Context/Exercise/ExerciseContext";
import Footer from "../../Context/Footer";

const BlogPertamaPart3 = () => {
  const [editor, setEditor] = useState(null);
  const [userOutput, setUserOutput] = useState("");
  const [challenge, setChallenge] = useState({
    output: "Engine started!",
    description: "Hasilkan output:",
  });
  const [answer, setAnswer] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const editorInstance = CodeMirror(document.getElementById("editor"), {
      lineNumbers: true,
      mode: "text/x-java",
      theme: "monokai",
      value: `// Tulis kode Java di sini`,
    });
    setEditor(editorInstance);
  }, []);

  const handleUserSubmit = async () => {
    const userCode = editor.getValue();
    try {
      const response = await fetch("/api/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId: "7a46b49a6ed3f63c58b608540ab1c97",
          clientSecret:
            "62c88c62a2fde469695490506cf30f3961d1f57c3ac08004f39c6a69558ddb5",
          script: userCode,
          language: "java",
          versionIndex: "0",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      const result = data.output.trim();
      setUserOutput(result);

      if (result === challenge.output) {
        setModalMessage("Selamat! Jawaban kamu benar! 🎉");
        setAnswer("true");
      } else {
        setModalMessage("Jawaban kamu belum tepat. Coba lagi! 💪");
        setAnswer("false");
      }
      setIsModalOpen(true);
    } catch (error) {
      console.error("Fetch error:", error);
      setUserOutput("Error: " + error.message);
      setModalMessage("Ada kesalahan dalam menjalankan kode! 🐛");
      setAnswer("false");
      setIsModalOpen(true);
    }
  };

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

  const currentPath = window.location.pathname;

  const exerciseConfig = {
    options: ["default", "private", "protected", "public"],
    correctAnswer: "public",
    question: (
      <>
        Modifier mana yang sesuai dengan deskripsi berikut: <br /> 'Kode ini
        dapat diakses oleh semua kelas'
      </>
    ),
  };

  const exerciseConfig2 = {
    options: ["package", "public", "util", "import"],
    correctAnswer: "import",
    question: (
      <>
        Untuk menggunakan class atau package dari Java API, kata kunci mana yang
        harus digunakan?
      </>
    ),
  };

  return (
    <div className="blog-page container">
      <div className="blog-page header align-items-center">
        <h2 className="text-black">
          Tutorial Coding OOP di Java #3: Modifier dan Packages
        </h2>
      </div>

      <div className="blog-page row">
        <div className="blog-page leftcolumn">
          <div className="blog-page card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSio4iHwto_mXFE3q2caH74o0QsKgsN79ehsw&s"
              alt="OOP"
              style={{ height: "200px", marginBottom: "30px" }}
            />
            <ul class="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/oopjava">Blog</a>
              </li>
              <li>OOP Java Part 3</li>
            </ul>
            <h2>Coding OOP in Java</h2>
            <h6>Raffi Fadlika, Oct 14, 2024</h6>
            <p
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                marginTop: "20px",
              }}
            >
              Dikelas sebelumnya kita telah membahas tentang Atribut, Method dan
              Constructor, sekarang kita akan membahas lebih lanjut tentang{" "}
              <strong>Modifier</strong> dan <strong>Packages</strong>
            </p>
            <h4>Modifier</h4>
            <p>
              Sekarang, Anda sudah cukup familiar dengan kata kunci publik yang
              muncul di hampir semua contoh kita:
            </p>
            <CodeEditor fileName="java" code="public class Main" />
            <p>
              Kata kunci public adalah pengubah akses, artinya digunakan untuk
              mengatur tingkat akses dari class, method, atau konstruktor.
              <br />
              Kita membagi modifier menjadi dua kelompok:
            </p>
            <ul>
              <li>
                <strong>Access Modifier</strong> - mengontrol tingkat akses
              </li>
              <li>
                <strong>Non-Access Modifier</strong> - tidak mengontrol tingkat
                akses, tetapi menyediakan fungsionalitas lain
              </li>
            </ul>
            <strong>Access Modifier</strong>
            <p>
              Access modifier adalah kata kunci yang digunakan untuk mengatur
              tingkat akses dari class, method, atau konstruktor. Untuk kelas,
              kamu bisa <code>public</code> atau <i>default</i>
            </p>
            <table className="bordered-table">
              <tr>
                <th>Modifier</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>
                  <code>public</code>
                </td>
                <td>class ini dapat diakses dari kelas manapun</td>
              </tr>
              <tr>
                <td>
                  <i>default</i>
                </td>
                <td>
                  class hanya dapat diakses oleh classes di package yang sama.
                  Ini digunakan saat kamu tidak menentukan access modifier. Kamu
                  akan mempelajari lebih lanjut pada{" "}
                  <a href="#" style={{ color: "black" }}>
                    bagian package
                  </a>
                </td>
              </tr>
            </table>
            <p>
              Untuk <strong>Atribut, Method dan Constructor</strong>, kalian
              bisa menggunakan:
            </p>
            <table className="bordered-table">
              <tr>
                <th>Modifier</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>
                  <code>public</code>
                </td>
                <td>Kode dapat diakses dari kelas manapun</td>
              </tr>
              <tr>
                <td>
                  <code>private</code>
                </td>
                <td>Kode hanya dapat diakses dari kelasnya dideklarasikan</td>
              </tr>
              <tr>
                <td>
                  <i>default</i>
                </td>
                <td>
                  Kode ini hanya dapat diakses dalam package yang sama. Ini
                  digunakan saat kita tidak menentukan modifier. Kita akan
                  mempelajari lebih lanjut pada{" "}
                  <a href="#package" style={{ color: "black" }}>
                    bagian package
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <code>protected</code>
                </td>
                <td>
                  Kode tersebut dapat diakses dalam package dan subclass yang
                  sama.
                </td>
              </tr>
            </table>
            <strong>Non-Access Modifier</strong>
            <p>
              Non-access modifier adalah kata kunci yang digunakan untuk
              mengatur tingkat akses dari class, method, atau konstruktor. Untuk
              kelas, kamu bisa menggunakan:
            </p>
            <table className="bordered-table">
              <tr>
                <th>Modifier</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>
                  <code>final</code>
                </td>
                <td>class tidak dapat di-extends dengan kelas lain</td>
              </tr>
              <tr>
                <td>
                  <code>abstract</code>
                </td>
                <td>class tidak dapat digunakan untuk membuat object</td>
              </tr>
            </table>
            <p>Untuk atribut dan method, kamu bisa menggunakan:</p>
            <table className="bordered-table">
              <tr>
                <th>Modifier</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>
                  <code>final</code>
                </td>
                <td>Atribut dan method tidak dapat ditimpa/diubah</td>
              </tr>
              <tr>
                <td>
                  <code>static</code>
                </td>
                <td>
                  Atribut dan metode akan menjadi milik class, bukan milik
                  object
                </td>
              </tr>
              <tr>
                <td>
                  <code>abstract</code>
                </td>
                <td>
                  Hanya dapat digunakan dalam kelas abstract, dan hanya dapat
                  digunakan pada method. Method tidak memiliki body, misalnya
                  abstract void run();. body disediakan oleh subclass (dari yang
                  diwarisi).
                </td>
              </tr>
              <tr>
                <td>
                  <code>transient</code>
                </td>
                <td>
                  Atribut dan method dilewati saat melakukan serialisasi object
                  yang memuatnya
                </td>
              </tr>
              <tr>
                <td>
                  <code>synchronized</code>
                </td>
                <td>
                  Method hanya dapat diakses oleh satu thread pada satu waktu
                </td>
              </tr>
              <tr>
                <td>
                  <code>volatile</code>
                </td>
                <td>
                  Nilai atribut tidak di-cache secara lokal di thread, dan
                  selalu dibaca dari "memori utama"
                </td>
              </tr>
            </table>
            <strong style={{ marginTop: "20px", marginBottom: "-5px" }}>
              Final
            </strong>
            <p>
              Jika Anda tidak menginginkan kemampuan untuk mengganti nilai
              atribut yang ada, nyatakan atribut sebagai final:
            </p>
            <CodeEditor
              fileName="java"
              code={`public class Main {
  final int x = 10;
  final double PI = 3.14;

  public static void main(String[] args) {
    Main myObj = new Main();
    myObj.x = 50; //akan mengeluarkan error, karena x sudah final
    myObj.PI = 25; //akan mengeluarkan error, karena PI sudah final
    System.out.println(myObj.x);
  }
}`}
            />
            <strong>Static</strong>
            <p>
              Method static berarti method tersebut dapat diakses tanpa membuat
              object class, tidak seperti public. Mari kita demonstrasikan
              dengan contoh perbedaan dengan public:
            </p>
            <CodeEditor
              fileName="java"
              code={`public class Main {
  // Static method
  static void myStaticMethod() {
    System.out.println("Static methods bisa dipanggil tanpa membuat object");
  }

  // Public method
  public void myPublicMethod() {
    System.out.println("Public methods harus dipanggil dengan cara membuat object");
  }

  // Main method
  public static void main(String[ ] args) {
    myStaticMethod(); // Panggil method static
    // myPublicMethod(); Ini gabisa langsung dipanggil, bakalan error

    Main myObj = new Main(); // Buat object dari class dulu
    myObj.myPublicMethod(); // Baru deh dipanggil
  }
}`}
            />
            <strong>Abstract</strong>
            <p>
              Method abstract termasuk dalam class abstract, dan tidak memiliki
              body. Body disediakan oleh subclass:
            </p>
            <CodeEditor
              fileName="java"
              code={`// abstract class
abstract class Main {
  public String fname = "John";
  public int age = 24;
  public abstract void study(); // abstract method
}

// Subclass (inherit from Main)
class Student extends Main {
  public int graduationYear = 2018;
  public void study() { //body dari abstract method disediakan di sini
    System.out.println("Belajar setiap hari");
  }
}

class Second {
  public static void main(String[] args) {
    //buat object dari class Student (yang mewarisi atribut dan method dari Main)
    Student myObj = new Student();

    System.out.println("Name: " + myObj.fname);
    System.out.println("Age: " + myObj.age);
    System.out.println("Graduation Year: " + myObj.graduationYear);
    myObj.study(); // panggil method abstract
  }
}`}
            />
            <ExerciseProvider config={exerciseConfig}>
              <ExerciseComponent />
            </ExerciseProvider>
            <br />
            <h4 id="package">Package</h4>
            <p>
              Package dalam Java digunakan untuk mengelompokkan class terkait.
              Anggap saja sebagai folder dalam direktori file. Kita menggunakan
              package untuk menghindari konflik nama, dan untuk menulis kode
              yang lebih mudah dikelola. Package dibagi menjadi dua kategori:
              Package bawaan (Package dari API Java), atau Package yang
              ditentukan pengguna (buat Package Anda sendiri)
            </p>
            <strong>Built-in Package</strong>
            <p>
              API Java adalah library class yang telah ditulis sebelumnya, yang
              dapat digunakan secara gratis, dan disertakan dalam Lingkungan
              Pengembangan Java. <br />
              Library ini berisi komponen-komponen untuk mengelola input,
              pemrograman basis data, dan masih banyak lagi. Daftar lengkapnya
              dapat ditemukan di situs web Oracle:{" "}
              <a href="https://docs.oracle.com/javase/8/docs/api/">
                https://docs.oracle.com/javase/8/docs/api/.
              </a>
              <br />
              Library ini dibagi menjadi package dan class. Artinya, Anda dapat
              mengimpor satu class (beserta method dan atributnya), atau seluruh
              package yang berisi semua class yang termasuk dalam package yang
              ditentukan.
            </p>
            <p>
              Untuk menggunakan class atau package dari library, Anda perlu
              menggunakan kata kunci <code>import</code>:
            </p>
            <CodeEditor fileName="java" code={`import package.name.Class`} />
            <p>Sintaks diatas adalah untuk memanggil 1 class saja</p>
            <CodeEditor fileName="java" code={`import package.name.*`} />
            <p>Sintaks diatas adalah untuk memanggil seluruh package</p>
            <strong>Import class</strong>
            <p>
              Jika kalian menemukan class yang ingin digunakan, misalnya class
              Scanner, yang digunakan untuk mendapatkan masukan pengguna, tulis
              kode berikut:
            </p>
            <CodeEditor fileName="java" code={`import java.util.Scanner;`} />
            <p>Kemudian, buat object dari class tersebut:</p>
            <CodeEditor
              fileName="java"
              code={`Scanner myObj = new Scanner(System.in);`}
            />
            <p>
              Dari contoh diatas, <code>java.util</code> adalah package, dan{" "}
              <code>Scanner</code> adalah class dari package tersebut.
            </p>
            <p>
              Untuk menggunakan class Scanner, buat objek dari class tersebut
              dan gunakan salah satu method yang tersedia yang ditemukan dalam
              dokumentasi class Scanner. Dalam contoh kita, kita akan
              menggunakan method nextLine(), yang digunakan untuk membaca baris
              lengkap:
            </p>
            <CodeEditor
              fileName="java"
              code={`import java.util.Scanner;

class MyClass {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);
    System.out.println("Enter username");

    String userName = myObj.nextLine();
    System.out.println("Username is: " + userName);
  }
}`}
            />
            <strong>Import Package</strong>
            <p>
              Ada banyak package yang dapat dipilih. Pada contoh sebelumnya,
              kami menggunakan kelas <code>Scanner</code> dari paket{" "}
              <code>java.util</code>. Paket ini juga berisi fasilitas tanggal
              dan waktu, generator angka acak, dan kelas utilitas lainnya.
            </p>
            <p>
              Untuk mengimpor seluruh paket, akhiri kalimat dengan tanda bintang
              (<code>*</code>). Contoh berikut akan mengimpor SEMUA kelas dalam
              paket <code>java.util</code>:
            </p>
            <CodeEditor fileName="java" code={`import java.util.*;`} />
            <ExerciseProvider config={exerciseConfig2}>
              <ExerciseComponent />
            </ExerciseProvider>
            <div className="container mt-4 mb-4">
              <div className="card bg-secondary-subtle text-black">
                <div className="card-body text-left">
                  <h3 className="card-title text-center">
                    Tebak-tebakan Coding Java
                  </h3>
                  <p>
                    Buat program Java yang mendemonstrasikan penggunaan modifier
                    dan package. Program harus memiliki: 1. Sebuah package
                    bernama "java.util" 2. Sebuah class public bernama "Vehicle"
                    dalam package tersebut 3. Buat class untuk menerima inputan
                    dari user yang berisi "Engine started!", dan buat method
                    untuk menampilkan outputnya 4. Sebuah method protected
                    bernama "startEngine()" 5. Sebuah class Main yang mengimpor
                    dan menggunakan class Vehicle Output yang diharapkan:
                    "Engine started!"
                  </p>
                  <p>
                    {challenge.description} <strong>{challenge.output}</strong>
                  </p>

                  <div
                    id="editor"
                    style={{
                      height: "300px",
                      marginBottom: "20px",
                      borderRadius: "20px",
                    }}
                  ></div>

                  <button
                    onClick={handleUserSubmit}
                    className="btn btn-success mr-2"
                  >
                    Submit Answer »
                  </button>

                  <div className="output" style={{ marginTop: "20px" }}>
                    <p>Output kamu: {userOutput}</p>
                  </div>
                </div>
              </div>
              {isModalOpen && (
                <Modal
                  message={modalMessage}
                  onClose={() => setIsModalOpen(false)}
                  answer={answer}
                />
              )}
            </div>
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

      <Footer />
    </div>
  );
};

export default BlogPertamaPart3;
