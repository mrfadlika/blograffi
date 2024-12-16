import FooterMain from "../../Context/Footer/Footer.Main";
import ListPage from "../../Context/List";
import tutorData from "./BlogPertama.hooks";

const BlogPertama = () => {
  return (
    <div style={{ height: 'auto', position: 'relative' }}>
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
        image="/flyer-1.png"
      />
    </div>
  );
};

export default BlogPertama;