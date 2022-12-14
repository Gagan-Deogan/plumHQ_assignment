import React from "react";
import ReactDOM from "react-dom";
import "./assests/css/index.css";
import App from "./App";
import { AppContextProvider } from "./contexts/context";
ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
