import React from "react";
import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";

const Nav = () => {
  return (
    <nav>
      <Link to={"/"}>
        <h1>Wear</h1>
      </Link>
      <Link to={"/checkout"}>
        <div className="cart">
          <AiFillShopping />
          <span>0</span>
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
