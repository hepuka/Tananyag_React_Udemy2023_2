import React from "react";
import { LoginContext } from "../Contexts/LoginContext";
import { useContext } from "react";

const Profile = () => {
  const { username } = useContext(LoginContext);
  return (
    <div className="login">
      <h1>Profile</h1>
      <h2>Username: {username}</h2>
    </div>
  );
};

export default Profile;
