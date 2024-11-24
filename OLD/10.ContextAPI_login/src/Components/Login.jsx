import React from "react";
import { LoginContext } from "../Contexts/LoginContext";
import { useContext } from "react";

const Login = () => {
  const { setUserName, setShowProfile } = useContext(LoginContext);

  return (
    <div className="login">
      <input
        type="text"
        placeholder="Username..."
        onChange={(e) => setUserName(e.target.value)}
      />

      <input type="text" placeholder="Password..." />

      <button onClick={() => setShowProfile(true)}>LOGIN</button>
    </div>
  );
};

export default Login;
