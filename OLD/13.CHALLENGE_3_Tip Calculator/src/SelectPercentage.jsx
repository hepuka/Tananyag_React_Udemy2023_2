import React from "react";

const SelectPercentage = ({ children, percentage, setPercentage }) => {
  return (
    <div className="data">
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amaizing (20%)</option>
      </select>
    </div>
  );
};

export default SelectPercentage;
