import React from "react";
import { pizzaData } from "./data.js";
import Pizza from "./Pizza.jsx";

const Menu = () => {
  const numPizzas = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* feltételes rendereléskor ne használd az and operátort, mindig a ternáris operátort kell használni.
      ? után a true ágat és a : után a false ágat. Ha nem akarunk semmit a false ágba rakni, akkor null-t kell megadni a : után */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. {numPizzas} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((item) => (
              <Pizza pizzaObj={item} key={item.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later. </p>
      )}
    </main>
  );
};

export default Menu;
