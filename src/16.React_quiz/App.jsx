import React from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main></Main>
    </div>
  );
};

export default App;
