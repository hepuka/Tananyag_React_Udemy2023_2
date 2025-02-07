//eredeti main.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './src/21.BankAccount-Redux/store';
import App from './src/05.CHALLENGE_1_Profile Card/App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
