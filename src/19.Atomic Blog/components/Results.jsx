import React from "react";
import { usePosts } from "../PostContext.jsx";

const Results = () => {
  const { posts } = usePosts();

  return <p>{posts.length} posts found</p>;
};

export default Results;
