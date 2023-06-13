import { useState } from "react";
import Input from "./Input";

import Display from "./Display";

function App() {
  const [inputdata, setInputData] = useState();
  const [formData, setFormData] = useState([]);

  const handleAddItems = (item) => {
    setFormData(() => [...formData, item]);
  };

  const getData = (e) => {
    setInputData(e.target.value);
  };

  return (
    <div className="App">
      <div className="parent">
        <h2>App komponens</h2>
        <p> Adat az input komponensből:</p>
        <p>{inputdata}</p>

        {formData.map((item) => (
          <div key={item.id}>
            <span>{item.nevInput} </span>
            <span>{item.cimInput} </span>
            <span>{item.selectInput}</span>
          </div>
        ))}
      </div>

      <div className="comps">
        <div className="child1">
          <Input getData={getData} handleAddItems={handleAddItems} />
        </div>

        <div className="child2">
          <Display inputdata={inputdata} formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;
