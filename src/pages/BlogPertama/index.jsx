import ListPage from "../List";

const tutorData = [
  "Tutorial Coding OOP di Java #1: Apa itu OOP?",
  "Tutorial Coding OOP di Java #2: Mengenal Atribut, Method dan Constructor",
  "Tutorial Coding OOP di Java #3: Modifier dan Packages",
];

const BlogPertama = () => {
  return (
    <ListPage
      tutorials={tutorData}
      title="Memahami OOP dalam Java"
      description="Panduan lengkap tentang dasar OOP dalam bahasa pemrograman Java"
      descriptionContent={{
        intro:
          "Tutorial ini akan mengajarkan Anda cara coding object oriented programming di bahasa pemrograman Java. Materi akan dibahas secara bertahap dan terstruktur, mulai dari:",
        points: [
          "Pengertian OOP",
          "Atribut, Method dan Constructor",
          "Modifier dan Packages",
        ],
        conclusion:
          "Dengan seri blog ini diharapkan teman teman dapat mengimplementasikan apa itu object oriented programming pada bahasa Java",
      }}
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSio4iHwto_mXFE3q2caH74o0QsKgsN79ehsw&s"
    />
  );
};

export default BlogPertama;