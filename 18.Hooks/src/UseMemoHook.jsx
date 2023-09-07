import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export default function UseMemoHook() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";

    for (let i = 0; i < comments.length; i++) {
      if (comments[i].name.length > longestName.length) {
        longestName = comments[i].name;
      }
    }

    console.log("LongestName has been detected");
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <div className="App">
      <div>LongestName: {getLongestName} </div>

      <div>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Toggle
        </button>
      </div>

      {toggle && <h1> toggled </h1>}
    </div>
  );
}
