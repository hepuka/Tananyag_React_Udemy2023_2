//eredeti main.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import App from './src/21.BankAccount-Redux/App';
import store from './src/21.BankAccount-Redux/store';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
