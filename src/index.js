import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import process from "process";
import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './i18n';
// import './index.css';

// window.process = { env: {} };
window.process = process || {};

ReactDOM.render(
  // <React.StrictMode>
  <Suspense fallback={<div>Loading translations...</div>}>
    <App />
  </Suspense>,
  //  </React.StrictMode>,
  document.getElementById("root")
);

