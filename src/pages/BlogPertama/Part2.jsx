import { h } from "preact";
import "./BlogPertama.styles.css";
import CodeEditor from "../../Context/CodeEditor";
import { useEffect, useState } from "preact/hooks";
import Modal from "../../Context/Modal";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/clike/clike";
import Footer from "../../Context/Footer";

const BlogPertamaPart2 = () => {
  const [editor, setEditor] = useState(null);
  const [userOutput, setUserOutput] = useState("");
  const [message, setMessage] = useState("");
  const [challenge, setChallenge] = useState({
    output: "1996, Mustang",
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
      value: `public class Solution {
  public static void main(String[] args) {
    // Tulis kode Java di sini
    System.out.println(solution());
  }

  public static String solution() {
    // Kode kamu
    return "";
  }
}`,
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

  const currentPath = window.location.pathname;

  const code1 = `public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj1 = new Main();
    Main myObj2 = new Main();
    myObj2.x = 25;
    System.out.println(myObj1.x);
  }
}`;

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
      <div className="blog-page header text-black">
        <h2>
          Tutorial Coding OOP di Java #2: Mengenal Atribut, Method dan
          Constructor
        </h2>
      </div>

      <div className="blog-page row">
        <div className="blog-page leftcolumn">
          <div className="blog-page card">
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
              <li>OOP Java Part 2</li>
            </ul>
            <h2>Coding OOP in Java</h2>
            <h6>Raffi Fadlika, Oct 12, 2024</h6>
            <p
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                marginTop: "20px",
              }}
            >
              Dikelas sebelumnya kita sudah membahas tentang apa itu OOP dan
              beberapa konsep dasar nya, sekarang kita akan membahas lebih
              lanjut mengenai Atribut, Method dan Constructor
            </p>
            <h4>Attribute</h4>
            <p>
              Sebelumnya, kita menggunakan x sebagai sebuah variable, itulah
              yang disebut dengan Attribute. <br />
              Contohnya, kita membuat class bernama <code>Main</code> dan
              didalam class tersebut terdapat 2 atribut yaitu <code>x</code> dan{" "}
              <code>y</code>
            </p>
            <CodeEditor
              fileName="java"
              code={`public class Main {
  int x = 5;
  int y = 10;
}`}
            />
            <strong>Mengakses Attribute</strong>
            <p>
              Untuk mengakses attribute, kita bisa menggunakan object dan
              memanggilnya. Contohnya, kita membuat object bernama{" "}
              <code>myObj</code> untuk mengeluarkan output dari atribut{" "}
              <code>x</code>
            </p>
            <CodeEditor
              fileName="java"
              code={`public class Main {
  int x = 5;
  int y = 10;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}`}
            />
            <strong>Modifikasi Attribute</strong>
            <p>
              Kita bisa mengubah nilai dari attribute dengan cara memanggilnya
              kembali. Contohnya, kita mengubah nilai dari atribut{" "}
              <code>x</code> menjadi 25
            </p>
            <CodeEditor
              fileName="java"
              code={`public class Main {
  int x;

  public static void main(String[] args) {
    Main myObj = new Main();
    myObj.x = 40;
    System.out.println(myObj.x);
  }
}

//Expected Output : 40`}
            />
            <p>
              atau dengan mengoverride nilai value dari attribute yang bukan
              attribute final
            </p>
            <CodeEditor
              fileName="java"
              code={`public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj1 = new Main();
    Main myObj2 = new Main();
    myObj1.x = 25; // Mengubah nilai x menjadi 25
    System.out.println(myObj1.x + " " + myObj2.x);
  }
}

//Expected Output : 25 5`}
            />
            <p>
              Jika teman teman belum mengerti mengapa myObj1.x berubah menjadi
              25 dan myObj2.x tetap 5, silahkan teman teman{" "}
              <a href="https://wa.me/62882020802944" style={{ color: "black" }}>
                hubungi penulis
              </a>{" "}
              untuk diskusi lebih lanjut
            </p>
            <strong>Multiple Attributes</strong>
            <p>
              Kita juga bisa membuat beberapa atribut dalam sebuah class,
              Contohnya
            </p>
            <CodeEditor
              fileName="java"
              code={`public class Main {
  String first_name = "Raffi";
  String last_name = "Fadlika";
  int umur = 18;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println("Nama saya " + myObj.first_name + " " + myObj.last_name + ". Saya berumur " + myObj.umur + " tahun.");
  }
}
  
//Expected Output : Nama saya Raffi Fadlika. Saya berumur 18 tahun.`}
            />
            <div className="container mt-1">
              <div className="card bg-secondary-subtle text-black">
                <div className="card-body text-center">
                  <h3 className="card-title">Exercise</h3>
                  <p className="text-center">
                    Tebak Output: <br /> Apa output dari program dibawah ini?
                  </p>
                  <div className="bg-dark text-light p-3 rounded shadow mb-4">
                    <pre className="m-0" style={{ textAlign: "left" }}>
                      <code>{code1}</code>
                    </pre>
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="d-flex flex-column align-items-center"
                  >
                    <label
                      className="form-check p-2 mb-2 w-75 d-flex justify-content-center align-items-center bg-secondary rounded jawaban-dihover"
                      htmlFor="multipleAnswer1"
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="answer"
                        id="multipleAnswer1"
                        value="false"
                        onChange={(e) => setAnswer(e.target.value)}
                        style={{ transform: "scale(1.5)" }}
                      />
                      <span
                        className="ms-3 text-white"
                        style={{ fontSize: "1.2rem" }}
                      >
                        Error
                      </span>
                    </label>
                    <label
                      className="form-check p-2 mb-2 w-75 d-flex justify-content-center align-items-center bg-secondary rounded jawaban-dihover"
                      htmlFor="multipleAnswer2"
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="answer"
                        id="multipleAnswer2"
                        value="false"
                        onChange={(e) => setAnswer(e.target.value)}
                        style={{ transform: "scale(1.5)" }}
                      />
                      <span
                        className="ms-3 text-white"
                        style={{ fontSize: "1.2rem" }}
                      >
                        25
                      </span>
                    </label>
                    <label
                      className="form-check p-2 mb-2 w-75 d-flex justify-content-center align-items-center bg-secondary rounded jawaban-dihover"
                      htmlFor="multipleAnswer3"
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="answer"
                        id="multipleAnswer3"
                        value="false"
                        onChange={(e) => setAnswer(e.target.value)}
                        style={{ transform: "scale(1.5)" }}
                      />
                      <span
                        className="ms-3 text-white"
                        style={{ fontSize: "1.2rem" }}
                      >
                        myObj1.x
                      </span>
                    </label>
                    <label
                      className="form-check p-2 mb-2 w-75 d-flex justify-content-center align-items-center bg-secondary rounded jawaban-dihover"
                      htmlFor="multipleAnswer4"
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="answer"
                        id="multipleAnswer4"
                        value="true"
                        onChange={(e) => setAnswer(e.target.value)}
                        style={{ transform: "scale(1.5)" }}
                      />
                      <span
                        className="ms-3 text-white"
                        style={{ fontSize: "1.2rem" }}
                      >
                        5
                      </span>
                    </label>
                    <label
                      className="form-check p-2 mb-3 w-75 d-flex justify-content-center align-items-center bg-secondary rounded jawaban-dihover"
                      htmlFor="multipleAnswer5"
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="answer"
                        id="multipleAnswer5"
                        value="false"
                        onChange={(e) => setAnswer(e.target.value)}
                        style={{ transform: "scale(1.5)" }}
                      />
                      <span
                        className="ms-3 text-white"
                        style={{ fontSize: "1.2rem" }}
                      >
                        x
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
            <p
              style={{
                marginBottom: "-10px",
              }}
            >
              <h4>Method</h4>
            </p>
            <p>
              Di Java, Method dideklarasikan di dalam class, dan dapat diakses
              melalui object, tetapi ada 2 macam tipe method yaitu{" "}
              <strong>Instance Method</strong> dan{" "}
              <strong>Static Method</strong>
              <br />
              Method dipanggil dengan memanggil nama method tersebut diikuti
              dengan <code>()</code>, Contoh menggunakan method dengan baik dan
              benar
            </p>
            <CodeEditor
              fileName="java"
              code={`public class Main {
  static void myMethod() {
    System.out.println("Hello World!");
  }
}`}
            />
            <p
              style={{
                marginBottom: "-10px",
              }}
            >
              <strong>Memanggil Method</strong>
            </p>
            <p>
              Untuk memanggil method, kita bisa memanggilnya dengan memanggil
              nama method tersebut diikuti dengan <code>()</code>
            </p>
            <CodeEditor
              fileName="java"
              code={`public class Main {
  static void myMethod() {
    System.out.println("Hello World!");
  }

  public static void main(String[] args) {
    myMethod();
  }
}

// Expected Output: "Hello World!"`}
            />
            <strong
              style={{
                marginTop: "-2px",
                marginBottom: "10px",
              }}
            >
              Public Method vs Static Method
            </strong>
            <p>
              Kalian akan sering melihat program Java yang memiliki atribut
              dengan method static dan public Dalam contoh di bawah, metode
              static dapat diakses tanpa membuat objek dari kelas tersebut,
              tidak seperti method public, yang hanya dapat diakses oleh object{" "}
              <br />
              Mari demonstrasikan static dan public method
            </p>
            <CodeEditor
              fileName="java"
              code={`public class Main {
  // Static method
  static void myStaticMethod() {
    System.out.println("Static method bisa dipanggil tanpa membuat object");
  }

  // Public method
  public void myPublicMethod() {
    System.out.println("Public methods harus dipanggil dengan membuat object");
  }

  // Main method
  public static void main(String[] args) {
    myStaticMethod(); // Memanggil method static
    // myPublicMethod(); Ini akan error

    Main myObj = new Main(); // Membuat object dari class Main
    myObj.myPublicMethod(); // Memanggil method public
  }
}`}
            />
            <p>
              Dari code diatas, dapat dilihat bahwa method static dapat diakses
              tanpa membuat object, sedangkan method public harus membuat object{" "}
              <code>myObj</code> terlebih dahulu untuk mengaksesnya <br />
            </p>
            <p>
              <strong>Akses Method dengan sebuah Object</strong>
            </p>
            <p>
              Contoh: Membuat sebuah object mobil dengan nama <code>myCar</code>
              , panggil method <code>fullThrottle()</code> dan{" "}
              <code>speed()</code> pada object <code>myCar</code>, dan jalankan
              program
            </p>
            <CodeEditor
              fileName="java"
              code={`// Buat sebuah Main class
public class Main {
 
  // Buat sebuah fullThrottle() method
  public void fullThrottle() {
    System.out.println("The car is going as fast as it can!");
  }

  // Buat speed() method dan tambahkan parameter
  public void speed(int maxSpeed) {
    System.out.println("Max speed is: " + maxSpeed);
  }

  // di dalam main, panggil method di object myCar
  public static void main(String[] args) {
    Main myCar = new Main();   // buat object myCar
    myCar.fullThrottle();      // panggil fullThrottle() method
    myCar.speed(200);          // panggil speed() method
  }
}

// The car is going as fast as it can!
// Max speed is: 200`}
            />
            <p>
              Dari code diatas, dapat dilihat bahwa telah dibuat custom{" "}
              <code>Main</code> class dengan keyboard <code>class</code>,
              Setelah itu kita membuat method <code>fullThrottle()</code> dan{" "}
              <code>speed()</code> di <code>Main</code> class,{" "}
              <code>fullThrottle()</code> dan <code>speed()</code> akan
              mengeluarkan output yang sama ketika dipanggil, method{" "}
              <code>speed()</code> memiliki parameter yaitu{" "}
              <code>maxSpeed</code> yang bertipe data <code>int</code>.
              <br />
              Untuk menggunakan <code>Main</code> class, kita harus membuat
              object dari <code>Main</code> class terlebih dahulu, Kemudian
              pergi ke main() method, yang biasanya digunakan untuk mengeksekusi
              program. Dengan menggunakan kata kunci baru kita membuat object
              dengan nama <code>myCar</code>.
              <br />
              Kemudian kita memanggil method <code>
                fullThrottle()
              </code> dan <code>speed()</code> pada object <code>myCar</code>,
              dan jalankan program menggunakan nama object ( <code>myCar</code>{" "}
              ), diikuti titik (.), diikuti nama method (
              <code>fullThrottle();</code> dan <code>speed(200);</code>).
              Perhatikan bahwa kita menambahkan parameter tipe data{" "}
              <code>int</code> dengan nilai <strong>200</strong> di dalam method{" "}
              <code>speed()</code>.
              <div className="container-pengingat">
                <h4>Perhatikan!</h4>
                <p>
                  Titik (.) digunakan untuk mengakses atribut objek dan method{" "}
                  <br />
                  Untuk memanggil method di Java, tulisan nama method diikuti
                  dengan tanda kurung () dan semicolon (;) <br />
                  Sebuah class harus sama dengan nama file (<code>
                    Main
                  </code>{" "}
                  dan <strong>Main.java</strong>)
                </p>
              </div>
            </p>
            <h4>Constructor</h4>
            <p>
              Constructor adalah sebuah method yang dipanggil saat object
              dibuat, constructor dapat digunakan untuk menginisialisasi object,
              Constructor dipanggil saat object dari class sudah dibuat. Dapat
              digunakan untuk menetapkan nilai awal untuk atribut object
            </p>
            <CodeEditor
              fileName="java"
              code={`public class Main {
  int x;

  //ini adalah constructor
  public Main() {
   x = 5;
  }

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}`}
            />
            <p>
              Dari code diatas, dilihat bahwa <code>public Main()</code> dibuat
              untuk memberi nilai pada x
            </p>
            <strong>Constructor Parameter</strong>
            <p>
              Melanjutkan code diatas, parameter dari method <code>Main()</code>{" "}
              dapat ditambahkan untuk menginisialisasi nilai dari atribut x
            </p>
            <CodeEditor
              fileName="java"
              code={`public class Main {
  int x;

  //ini adalah constructor
  public Main(int y) {
   x = y; //menyamakan nilai x dan y
  }

  public static void main(String[] args) {
    Main myObj = new Main(5); //memasukkan nilai y
    System.out.println(myObj.x); //mengambil hasil dari x
  }
}`}
            />
            <p>
              Dari code diatas, dapat diperhatikan, jika di constructor kita
              menyamakan isi atribut x dan y, maka nilai x akan sama dengan
              nilai y, dan ketika kita memasukkan isi pada object{" "}
              <code>myObj</code>, yang dimasukkan adalah nilai y, dan di
              perintahkan output adalah nilai x
            </p>
            <br />
            {/* Tebak-tebakan Java */}
            <div className="container mt-4 mb-4">
              <div className="card bg-secondary-subtle text-black">
                <div className="card-body text-left">
                  <h3 className="card-title text-center">
                    Tebak-tebakan Coding Java
                  </h3>
                  <p>
                    Buat program mendeskripsikan mobil yang mempunyai class{" "}
                    <code>Main</code> dan method constructor yang memiliki
                    parameter, buat 1 object untuk mengeluarkan output 2 atribut
                    yaitu modelYear dan modelName
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

            <p></p>
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

export default BlogPertamaPart2;
