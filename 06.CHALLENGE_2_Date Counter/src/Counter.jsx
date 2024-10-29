import React from "react";
import { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();

  date.setDate(date.getDate() + count);

  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  return (
    <>
      <div className="buttons">
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>
        <p>
          {count === 0
            ? `Today is `
            : count > 0
            ? `${count} days from today is `
            : count < 0
            ? `${Math.abs(count)} days ago was `
            : ""}
          {date.toDateString()}
        </p>

        {(step !== 1 || count !== 0) && (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Counter;
