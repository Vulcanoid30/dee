import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
