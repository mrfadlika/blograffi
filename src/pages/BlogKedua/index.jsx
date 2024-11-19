import ListPage from "../../Context/List";
import { blogSeries } from "./data_blogkedua";

const BlogKedua = () => {
  const title = blogSeries.map(blog => blog.title);
  return (
    <ListPage
      tutorials={title}
      title="Tutorial Laravel API"
      description="Panduan lengkap tentang Laravel API menggunakan Laravel 11"
      descriptionContent={{
        intro:
          "Tutorial ini akan mengajarkan Anda cara membuat API di Laravel menggunakan API Resources. Materi akan dibahas secara bertahap dan terstruktur, mulai dari:",
        points: [
          "Install dan Menjalankan Laravel 11",
          "Membuat Model dan Migration",
          "Membuat API Resources",
          "Menampilkan Data dari Database",
          "Insert Data ke Database",
          "Menampilkan Detail Data",
          "Update Data ke Database",
          "Hapus Data dari Database",
        ],
        conclusion:
          "Dengan seri blog ini diharapkan teman teman dapat mengimplementasikan pendistribusian dan pembuatan API Resources pada Laravel 11",
      }}
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvD-_e6KULLAtEtg16vKPZJmATkdXiZi09Q&s"
    />
  );
};

export default BlogKedua;