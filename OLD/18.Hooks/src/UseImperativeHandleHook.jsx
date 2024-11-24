import React, { useRef } from "react";
import Button from "./Button";

const UseImperativeHandleHook = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>

      {/* make this button as a reference */}
      <Button ref={buttonRef} />
    </div>
  );
};

export default UseImperativeHandleHook;
