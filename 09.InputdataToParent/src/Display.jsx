import React from "react";
import Datas from "./Datas";

const Display = ({ inputdata, formData }) => {
  return (
    <div>
      <h2>Display komponens</h2>
      <p>Inputból származó adatok megjelenítése: {inputdata}</p>

      <hr />

      <p>Szállítási cím</p>
      {formData.map((item) => (
        <Datas data={item} key={item.id} />
      ))}
    </div>
  );
};

export default Display;
