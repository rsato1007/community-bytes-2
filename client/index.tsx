/* IMPORT EXTERNAL MODULES */
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

/* IMPORT INTERNAL MODULES */
import App from "./App";

/*
  Find's the root node the entire application is attached to then
  renders the application.
*/
const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);