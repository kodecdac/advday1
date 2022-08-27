import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import React from "react"; // External Module
import App from "./App"; // LOCAL MODULE / Program PART OF src folder

import store from "./store/store";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
