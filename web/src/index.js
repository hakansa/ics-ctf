import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import { ButtonProvider } from "./components/pages/ButtonContext";

ReactDOM.render(
  <ButtonProvider>
    <App />
  </ButtonProvider>,
  document.getElementById("root")
);
