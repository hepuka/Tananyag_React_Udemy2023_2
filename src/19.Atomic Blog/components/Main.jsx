import React from "react";
import { memo } from "react";
import FormAddPost from "./FormAddPost.jsx";
import Posts from "./Posts.jsx";

const Main = memo(() => {
  return (
    <main>
      <FormAddPost />
      <Posts />
    </main>
  );
});

export default Main;
