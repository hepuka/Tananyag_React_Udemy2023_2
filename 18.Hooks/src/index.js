import React from "react";
import ReactDOM from "react-dom/client";
import UseStateHook from "./UseStateHook";
import UseReducerHook from "./UseReducerHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseReducerHook />
  </React.StrictMode>
);
