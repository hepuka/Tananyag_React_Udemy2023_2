import React from "react";
import Card from "./Card";

const Products = () => {
  const products = [
    { name: "vest", price: 50 },
    { name: "jacket", price: 23 },
    { name: "sweater", price: 56 },
    { name: "tshirt", price: 34 },
    { name: "necklace", price: 10 },
    { name: "jumper", price: 30 },
    { name: "vest", price: 50 },
  ];

  return (
    <div className="product-list">
      {products.map((item) => (
        <Card name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default Products;
