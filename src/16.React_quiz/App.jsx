import React from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Loader from "./components/Loader.jsx";
import Error from "./components/Error.jsx";
import "./App.css";
import { useEffect, useReducer } from "react";
import StartScreen from "./components/StartScreen.jsx";

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
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
  const numQuestions = questions.length;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/questions");
        const data = await response.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "Loading" && <Loader />}
        {status === "Error" && <Error />}
        {status === "Ready" && <StartScreen numQuestions={numQuestions} />}
      </Main>
    </div>
  );
};

export default App;
