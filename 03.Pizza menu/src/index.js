import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
