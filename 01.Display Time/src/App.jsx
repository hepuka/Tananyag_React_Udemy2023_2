import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>
        Current date and time: {new Date().toLocaleDateString()} {time}
      </h1>
    </div>
  );
}

export default App;
