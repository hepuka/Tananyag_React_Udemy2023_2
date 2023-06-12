import { useState } from "react";
import Input from "./Input";
import Datas from "./Datas";

function App() {
  const [inputdata, setInputData] = useState();
  const [formData, setFormData] = useState([]);

  console.log(inputdata);
  console.log(formData);

  const handleAddItems = (item) => {
    setFormData(() => [...formData, item]);
  };

  const getData = (e) => {
    setInputData(e.target.value);
  };

  return (
    <div className="App">
      <Input getData={getData} handleAddItems={handleAddItems} />

      <p>
        Data from child component: <span>{inputdata}</span>
      </p>

      <hr />

      {formData.map((item) => (
        <Datas data={item} />
      ))}
    </div>
  );
}

export default App;
