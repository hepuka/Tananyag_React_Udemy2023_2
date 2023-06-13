import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
};

export default Accordion;
