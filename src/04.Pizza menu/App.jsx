import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
