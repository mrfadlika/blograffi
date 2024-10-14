import Router from "preact-router";
import Home from "../pages/home";
import BlogPertamaPart1 from "../pages/BlogPertama/Part1";
import BlogPertamaPart2 from "../pages/BlogPertama/Part2";
import CodingChallenge from "../pages/test";
import BlogPertamaPart3 from "../pages/BlogPertama/Part3";

function Routes() {
    return (
        <Router>
            <Home path="/" />
            <BlogPertamaPart1 path="/OOPJava/1" />
            <BlogPertamaPart2 path="/OOPJava/2" />
            <CodingChallenge path="/test"/>
            <BlogPertamaPart3 path="/OOPJava/3" />
        </Router>
    )
}

export default Routes;
