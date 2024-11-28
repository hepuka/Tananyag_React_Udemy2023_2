import React from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import "./App.css";
import { useEffect, useReducer } from "react";

const initialState = {
  questions: [],
  status: "Loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "Ready" };
    case "dataFailed":
      return { ...state, status: "Error" };
    default:
      throw new Error("Unknown action");
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main></Main>
    </div>
  );
};

export default App;
