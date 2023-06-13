import { useState } from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { LoginContext } from "./Contexts/LoginContext";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUserName] = useState("");

  return (
    <div className="App">
      <LoginContext.Provider value={{ username, setUserName, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
