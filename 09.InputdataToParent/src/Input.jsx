import React from "react";

const Input = ({ getData }) => {
  return (
    <div>
      <input type="text" onChange={getData} />
    </div>
  );
};

export default Input;
