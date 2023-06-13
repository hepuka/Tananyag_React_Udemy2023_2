import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { IoShirtOutline } from "react-icons/io5";

const Card = ({ name, price }) => {
  return (
    <div className="card">
      <div className="product-box">
        <IoShirtOutline />
      </div>
      <div className="purchase">
        <h3>{name}</h3>
        <AiFillShopping />
      </div>
      <h4>${price}</h4>
    </div>
  );
};

export default Card;
