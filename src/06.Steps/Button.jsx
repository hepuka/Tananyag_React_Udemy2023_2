import React from 'react';

const Button = ({ textColor, bgColor, stepfunction, children }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={stepfunction}
    >
      {children}
    </button>
  );
};

export default Button;
