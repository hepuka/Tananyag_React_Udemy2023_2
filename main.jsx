//eredeti main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./src/22.Fast_React_Pizza/App.jsx";
import { Provider } from 'react-redux';
import store from './src/22.Fast_React_Pizza/store.js';

createRoot(document.getElementById("root")).render(
  <StrictMode>
       <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
