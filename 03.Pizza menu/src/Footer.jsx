import React from "react";
import Order from "./Order";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {/* ha nem akarunk hamis ágat jelölni. Ha a feltétel első értéke true akkor
      a feltétel második értéke végrehajtódik
      {isOpen && <Order closeHour={closeHour} openHour={openHour}/> } */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We're currently open!");
};

export default Footer;
