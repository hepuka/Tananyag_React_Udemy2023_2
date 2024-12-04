//eredeti main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./src/16.React_quiz/App.jsx";
import { QuizProvider } from "./src/16.React_quiz/contexts/QuizContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>
);
