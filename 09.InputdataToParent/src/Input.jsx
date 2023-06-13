import React from "react";
import { useState } from "react";

const Input = ({ setInputData, handleAddItems }) => {
  const [nevInput, setNevInput] = useState("");
  const [cimInput, setCimInput] = useState("");
  const [selectInput, setselectInput] = useState("férfi");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddItems({ nevInput, cimInput, selectInput, id: Date.now() });

    setCimInput("");
    setNevInput("");
  };

  return (
    <>
      <div className="inp">
        <h2>Input komponens</h2>
        <label htmlFor="rand">Text:</label>
        <input
          type="text"
          name="rand"
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">Név:</label>
          <input
            type="text"
            name="nameInput"
            value={nevInput}
            onChange={(e) => setNevInput(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cimInput">Cím:</label>
          <input
            type="text"
            name="cimInput"
            value={cimInput}
            onChange={(e) => setCimInput(e.target.value)}
          />
        </div>

        <div>
          <select
            value={selectInput}
            onChange={(e) => setselectInput(e.target.value)}
          >
            <option value="férfi">Férfi</option>
            <option value="nő">Nő</option>
          </select>
        </div>

        <button>Add</button>
      </form>
    </>
  );
};

export default Input;
