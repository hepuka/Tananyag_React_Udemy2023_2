import React from "react";

const Button = ({ textColor, bgColor, func, children }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={func}
    >
      {children}
    </button>
  );
};

export default Button;
