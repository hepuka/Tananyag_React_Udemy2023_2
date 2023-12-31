import React, { useState } from "react";

const AccordionItem = ({ num, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(() => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

export default AccordionItem;
