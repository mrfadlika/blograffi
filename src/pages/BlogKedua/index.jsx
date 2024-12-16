import { useEffect, useState } from "preact/hooks";
import { route } from "preact-router";
import ListPage from "../../Context/List";
import { blogSeries } from "./BlogKedua.hooks";
import LoginForm from "../Auth";

const BlogKedua = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState("");

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setLoggedUser(username);

    const redirectTo =
      new URLSearchParams(window.location.search).get("redirect") || "/";
    route(redirectTo);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedUser("");
    route("/");
  };

  useEffect(() => {
    if (!isLoggedIn) {
      const currentPath = window.location.pathname;
      route(`/laravel-api?redirect=${currentPath}`);
    }
  }, [isLoggedIn]);

  const title = blogSeries.map((blog) => blog.title);
  return (
    <div>
      {isLoggedIn ? (
        <div>
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
          image="flyer-2.png"
        />
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default BlogKedua;
