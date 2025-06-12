import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext"; 
import { GlobalProvider } from './context/GlobalContext';

ReactDOM.render(

  <AuthProvider> {/* Wrap the entire App */}
     <GlobalProvider>
      <App />
    </GlobalProvider>
  </AuthProvider>,
  document.getElementById("root")
);
