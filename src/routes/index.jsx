import Router from "preact-router";
import Home from "../pages/home";
import BlogPertamaPart1 from "../pages/BlogPertama/Part1";
import BlogPertamaPart2 from "../pages/BlogPertama/Part2";
import BlogPertamaPart3 from "../pages/BlogPertama/Part3";
import BlogPage from "../pages/test";
import BlogKeduaPart1 from "../pages/BlogKedua/Part1";
import ComingSoon from "./ComingSoon/ComingSoon";
import BlogKeduaPart2 from "../pages/BlogKedua/Part2";
import BlogKeduaPart3 from "../pages/BlogKedua/Part3";
import BlogKeduaPart4 from "../pages/BlogKedua/Part4";
import BlogPertama from "../pages/BlogPertama";
import BlogKedua from "../pages/BlogKedua";

function Routes() {
    return (
        <Router>
            <Home path="/" />
            <BlogPertama path="/oopjava" />
            <BlogPertamaPart1 path="/oopjava/1" />
            <BlogPertamaPart2 path="/oopjava/2" />
            <BlogPertamaPart3 path="/oopjava/3" />
            <BlogPage path="/test" />
            <BlogKedua path="/laravel-api" />
            <BlogKeduaPart1 path="/laravel-api/1" />
            <BlogKeduaPart2 path="/laravel-api/2" />
            <BlogKeduaPart3 path="/laravel-api/3" />
            <BlogKeduaPart4 path="/laravel-api/4" />
            <ComingSoon path="/coming-soon" />
            <ComingSoon path="*" />
        </Router>
    )
}

export default Routes;
