import { useState, useEffect } from 'react';
import { Message } from './Message';

function App() {
  const [advice, setAdvice] = useState('');
  const [counter, setCounter] = useState(0);

  const getAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();

    setAdvice(data.slip.advice);
    setCounter((number) => number + 1);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <h1>{advice}</h1>
      <Message counter={counter} />
      <button onClick={getAdvice}> Get Advice</button>
    </div>
  );
}

export default App;
