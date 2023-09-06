import { useState } from "react";

function Inputs() {
  const init = {
    name: "",
    email: "",
    password: "",
    address: "",
  };
  const [details, setDetails] = useState(init);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <form onSubmit={Submit}>
      <input
        type="text"
        name="name"
        value={details.name}
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={details.email}
        placeholder="email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={details.password}
        placeholder="password"
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        value={details.address}
        placeholder="address"
        onChange={handleChange}
      />
      <button>Send</button>
    </form>
  );
}

export default Inputs;
