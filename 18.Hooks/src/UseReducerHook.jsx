import React, { useReducer } from "react";

const UseReducerHook = () => {
  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);

  //egy eseménykor több state-et is módosítani szeretnénk
  //megoldaható useState-el is a példa szerint, de ez esetben célszerűbb a useReducer

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        Click Here
      </button>

      {showText && <p>This is a Text</p>}
    </div>
  );
};

export default UseReducerHook;
