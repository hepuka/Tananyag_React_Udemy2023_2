import React, { useContext } from "react";
import { AppContext } from "./UseContextHook";

const User = () => {
  const { username } = useContext(AppContext);

  return (
    <div>
      <h2>User component</h2>
      <p>Your username: {username}</p>
    </div>
  );
};

export default User;
