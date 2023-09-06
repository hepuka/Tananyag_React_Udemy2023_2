import React from "react";
import ReactDOM from "react-dom/client";
import UseStateHook from "./UseStateHook";
import UseReducerHook from "./UseReducerHook";
import UseEffectHook from "./useEffectHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseEffectHook />
  </React.StrictMode>
);
