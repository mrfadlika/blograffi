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
import BlogKeduaPart5 from "../pages/BlogKedua/Part5";
import BlogKeduaPart6 from "../pages/BlogKedua/Part6";
import BlogKeduaPart7 from "../pages/BlogKedua/Part7";
import BlogKeduaPart8 from "../pages/BlogKedua/Part8";
import BlogKedua from "../pages/BlogKedua";
import StackOver from "../pages/StackOver";
import StackPertama from "../pages/StackOver/StackPertama/StackPertama";

function Routes() {
    return (
        <Router>
            <Home path="/" />
            <BlogPertama path="/oopjava" />
            <BlogPertamaPart1 path="/oopjava/1" />
            <BlogPertamaPart2 path="/oopjava/2" />
            <BlogPertamaPart3 path="/oopjava/3" />
            {/* <LoginForm path="/test" /> */}
            <BlogKedua path="/laravel-api" />
            <BlogKeduaPart1 path="/laravel-api/1" />
            <BlogKeduaPart2 path="/laravel-api/2" />
            <BlogKeduaPart3 path="/laravel-api/3" />
            <BlogKeduaPart4 path="/laravel-api/4" />
            <BlogKeduaPart5 path="/laravel-api/5" />
            <BlogKeduaPart6 path="/laravel-api/6" />
            <BlogKeduaPart7 path="/laravel-api/7" />
            <BlogKeduaPart8 path="/laravel-api/8" />
            <ComingSoon path="/coming-soon" />
            <ComingSoon path="*" />
            <StackOver path="/stack-over" />
            <StackPertama path="/stack-over/1" />
        </Router>
    )
}

export default Routes;
