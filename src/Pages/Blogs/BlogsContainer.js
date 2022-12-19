import React, { useState } from "react";
import Blogs from "./Blogs";
import ReadMore from "./ReadMore";

const BlogsContainer = () => {
  const [show, setShow] = useState(false);
  const [blogDetails, setBlogDetails] = useState([]);
  return (
    <div>
      <Blogs setShow={setShow} setBlogDetails={setBlogDetails}></Blogs>
      <ReadMore setShow={setShow} show={show} blogDetails={blogDetails}></ReadMore>
    </div>
  );
};

export default BlogsContainer;
