import React from "react";
import ReactDOM from "react-dom/client";
import UseStateHook from "./UseStateHook";
import UseReducerHook from "./UseReducerHook";
import UseEffectHook from "./UseEffectHook";
import UseRefHook from "./UseRefHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseRefHook />
  </React.StrictMode>
);
