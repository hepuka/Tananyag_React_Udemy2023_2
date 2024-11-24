import { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [counter, setCounter] = useState(0);

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip.advice);
    setCounter((number) => number + 1);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <button onClick={getAdvice}> Get Advice</button>
      <h1>{advice}</h1>
      <Message counter={counter} />
    </div>
  );
}

function Message({ counter }) {
  return (
    <h1>
      You have read <strong>{counter}</strong> pieces of advice
    </h1>
  );
}

export default App;
