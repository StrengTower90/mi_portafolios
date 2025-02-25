import React from "react";
import ReactDOM from "react-dom";
import process from "process";
import App from "./App";
// import './index.css';

// window.process = { env: {} };
window.process = process || {};

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  //  </React.StrictMode>,
  document.getElementById("root")
);

