import React from "react";
import { usePosts } from "../PostContext.jsx";
import Results from "./Results.jsx";
import SearchPosts from "./SearchPosts.jsx";

const Header = () => {
  // 3) CONSUMING CONTEXT VALUE
  const { onClearPosts } = usePosts();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
};

export default Header;
