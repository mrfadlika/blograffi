import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import "./csstest.css";
import PriceFormatter from "../../Context/PriceFormatter";

const BlogPage = () => {
  return <PriceFormatter amount={1000000} />;
};

export default BlogPage;
