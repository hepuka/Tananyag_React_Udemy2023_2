import React, { useState } from "react";

const UseStateHook = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    setCounter(counter - 1);
  };

  const getInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div>
        {counter}
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>

      <div>
        <input type="text" onChange={getInput} />
        <div>
          <h1>{inputValue}</h1>
        </div>
      </div>
    </>
  );
};

export default UseStateHook;
