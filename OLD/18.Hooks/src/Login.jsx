import React, { useContext } from "react";
import { AppContext } from "./UseContextHook";

const Login = () => {
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <h2>Login component</h2>
      <label>Add your username :</label>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </div>
  );
};

export default Login;
