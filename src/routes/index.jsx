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

function Routes() {
    return (
        <Router>
            <Home path="/" />
            <BlogPertamaPart1 path="/OOPJava/1" />
            <BlogPertamaPart2 path="/OOPJava/2" />
            <BlogPertamaPart3 path="/OOPJava/3" />
            <BlogPage path="/test" />
            <BlogKeduaPart1 path="/laravel-api/1" />
            <BlogKeduaPart2 path="/laravel-api/2" />
            <BlogKeduaPart3 path="/laravel-api/3" />
            <ComingSoon path="/coming-soon" />
        </Router>
    )
}

export default Routes;
