import { createContext, useContext, useReducer, useEffect } from "react";

const BASE_URL = "http://localhost:9000";

const AuthContext = createContext();

const initialState = {
  allUser: [],
  currentUser: null,
  isAuthenticated: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "users/loaded":
      return {
        ...state,
        allUser: action.payload,
      };
    case "login":
      return { ...state, currentUser: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, currentUser: null, isAuthenticated: false };

    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ currentUser, isAuthenticated, allUser }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function fetchUsers() {
      try {
        const res = await fetch(`${BASE_URL}/users`);
        const data = await res.json();
        dispatch({ type: "users/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading users...",
        });
      }
    }
    fetchUsers();
  }, []);

  function login(email, password) {
    allUser.map((user) => {
      if (user.email === email && user.password === password) {
        dispatch({ type: "login", payload: user });
      }
    });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        allUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
