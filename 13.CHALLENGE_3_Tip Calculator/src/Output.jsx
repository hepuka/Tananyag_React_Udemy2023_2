import React from "react";

const Output = ({ bill, tip }) => {
  return (
    <div>
      <h3>Your bill: ${bill}</h3>
      <h3>Tip: ${tip}</h3>
      <h3>Total price: ${bill + tip}</h3>
    </div>
  );
};

export default Output;
