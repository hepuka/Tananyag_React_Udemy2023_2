import React from "react";
import CartContext from "../Contexts/CartContext";
import { useContext } from "react";

const Checkout = () => {
  const { items } = useContext(CartContext);
  return (
    <div>
      <h2>Checkout</h2>
      <div className="shopping-bag">
        {items.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <h3>${item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
