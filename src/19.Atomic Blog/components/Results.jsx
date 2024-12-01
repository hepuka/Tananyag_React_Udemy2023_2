import React from "react";
import { usePosts } from "../PostContext.jsx";

const Results = () => {
  const { posts } = usePosts();

  return <p>🚀 {posts.length} atomic posts found</p>;
};

export default Results;
