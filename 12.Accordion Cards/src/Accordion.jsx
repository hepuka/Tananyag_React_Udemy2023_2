import React from "react";
import AccordionItem from "./AccordionItem";
import { faqs } from "./faqs";

const Accordion = () => {
  return (
    <div className="accordion">
      {faqs.map((item, index) => (
        <AccordionItem
          title={item.title}
          text={item.text}
          num={index}
          key={item.title}
        />
      ))}
    </div>
  );
};

export default Accordion;
