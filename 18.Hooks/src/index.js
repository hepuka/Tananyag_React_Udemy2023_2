import React from "react";
import ReactDOM from "react-dom/client";
import UseStateHook from "./UseStateHook";
import UseReducerHook from "./UseReducerHook";
import UseEffectHook from "./UseEffectHook";
import UseRefHook from "./UseRefHook";
import UseLayoutEffectHook from "./UseLayoutEffectHook";
import UseImperativeHandleHook from "./UseImperativeHandleHook";
import UseContextHook from "./UseContextHook";
import UseMemoHook from "./UseMemoHook";
import UseCallbackHook from "./UseCallbackHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseCallbackHook />
  </React.StrictMode>
);
