import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import process from "process";
import { ContextProvider } from "./context/portfolioContext";
import App from "./App";
import './i18n';

// window.process = { env: {} };
window.process = process || {};

ReactDOM.render(
  // <React.StrictMode>
  <Suspense fallback={<div>Loading translations...</div>}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Suspense>,
  //  </React.StrictMode>,
  document.getElementById("root")
);

