import React from "react";

const BillInput = ({ bill, setBill }) => {
  return (
    <div className="data">
      <label>How much was the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
};

export default BillInput;
