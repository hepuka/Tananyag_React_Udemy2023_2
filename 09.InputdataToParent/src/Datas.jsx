import React from "react";

const Datas = ({ data }) => {
  return (
    <div>
      <p>Név: {data.nevInput}</p>
      <p> Cím: {data.cimInput}</p>
      <p>Nem: {data.selectInput}</p>
      <p>-------</p>
    </div>
  );
};

export default Datas;
