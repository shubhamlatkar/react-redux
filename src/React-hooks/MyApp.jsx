import React from "react";

import AuthContextProvider from "./context/auth-context";
import "./App.css";
import App from "./App";

const MyApp = props => {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
};

export default MyApp;
