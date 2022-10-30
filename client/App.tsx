/* IMPORT EXTERNAL MODULES */
import React from "react";

/* IMPORT INTERNAL MODULES */
import ClientRouter from "./Components/ClientRouter";

/**
 * The Entire Website Application
 * 
 * @returns JSX Element
 */
const App = (): JSX.Element => {
  return (
    <ClientRouter />
  );
};

export default App;