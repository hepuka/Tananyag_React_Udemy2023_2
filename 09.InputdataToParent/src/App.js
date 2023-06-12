import { useState } from "react";
import Input from "./Input";

function App() {
  const [inputdata, setInputData] = useState();

  console.log(inputdata);

  const getData = (e) => {
    setInputData(e.target.value);
  };

  return (
    <div className="App">
      <Input getData={getData} />
    </div>
  );
}

export default App;
