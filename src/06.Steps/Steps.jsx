import React from 'react';
import { useState } from 'react';
import { messages } from './messages.js';
import StepMessage from './StepMessage';
import Button from './Button';

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep((count) => count - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((count) => count + 1);
  };

  const info = () => {
    alert(`Learn how to ${messages[step - 1]}`);
  };

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isopen) => !isopen)}>
        &times;
      </button>

      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>
            {/* children part start */}
            <p> {messages[step - 1]}</p>

            <div className="buttons">
              <Button bgColor="#e7e7e7" textColor="#333" func={info}>
                Learn how
              </Button>
            </div>
            {/* children part end */}
          </StepMessage>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              stepfunction={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>

            <Button
              bgColor="#7950f2"
              textColor="#fff"
              stepfunction={handleNext}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Steps;
