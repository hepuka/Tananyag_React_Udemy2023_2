import { useState } from "react";
import useLocalStorage from "use-local-storage";
import "./index.css";

function Inputs() {
  const detailsInit = {
    name: "",
    email: "",
    password: "",
    address: "",
    bio: "",
    version: "16.8",
    level: "junior",
    hooks: false,
    hooks2: false,
    hooks3: false,
  };

  const [details, setDetails] = useState(detailsInit);
  const [personal, setPersonal] = useLocalStorage("personal", []);

  //https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    // const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const Submit = (e) => {
    e.preventDefault();

    setPersonal((item) => [
      ...item,
      {
        name: details.name,
        email: details.email,
        password: details.password,
        address: details.address,
        bio: details.bio,
        version: details.version,
        level: details.level,
        hooks: details.hooks,
        hooks2: details.hooks2,
        hooks3: details.hooks3,
      },
    ]);

    setDetails(detailsInit);
  };

  return (
    <form onSubmit={Submit}>
      <input
        type="text"
        name="name"
        value={details.name}
        placeholder="name"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        value={details.email}
        placeholder="email"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        value={details.password}
        placeholder="password"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        value={details.address}
        placeholder="address"
        onChange={handleChange}
        required
      />
      <textarea name="bio" value={details.bio} onChange={handleChange} />
      <select name="version" onChange={handleChange} value={details.version}>
        <option value="16.8">v16.8.0</option>
        <option value="16.7">v16.7.0</option>
        <option value="16.6">v16.6.0</option>
        <option value="16.5">v16.5.0</option>
      </select>
      <label>
        Junior
        <input
          type="radio"
          name="level"
          value="junior"
          checked={details.level === "junior"}
          onChange={handleChange}
        />
      </label>
      <label>
        Senior
        <input
          type="radio"
          name="level"
          value="senior"
          checked={details.level === "senior"}
          onChange={handleChange}
        />
      </label>

      <div className="box">
        <label>
          1.option
          <input
            type="checkbox"
            name="hooks"
            value="1.option"
            checked={details.hooks}
            onChange={handleChange}
          />
        </label>
        <label>
          2.option
          <input
            type="checkbox"
            name="hooks2"
            value="2.option"
            checked={details.hooks2}
            onChange={handleChange}
          />
        </label>
        <label>
          3.option
          <input
            type="checkbox"
            name="hooks3"
            value="3.option"
            checked={details.hooks3}
            onChange={handleChange}
          />
        </label>
      </div>

      <button>Send</button>
    </form>
  );
}

export default Inputs;
