import React, { useReducer } from "react";

const UseReducerHook = () => {
  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);
  const reducer = (state, dispatchAction) => {
    switch (dispatchAction.type) {
      case "INCREMENT":
        return { count: state.count + 1, showText: state.showText };
      case "TOGGLESHOWTEXT":
        return { count: state.count, showText: !state.showText };
    }
  };

  let data = {
    count: 0,
    showText: true,
  };

  const [state, dispatch] = useReducer(reducer, data);

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLESHOWTEXT" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a Text</p>}
    </div>
  );
};

export default UseReducerHook;
