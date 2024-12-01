import React from "react";
import { usePosts } from "../PostContext.jsx";

const List = () => {
  const { posts } = usePosts();

  return (
    <>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      {/* <Test /> */}
    </>
  );
};

export default List;
