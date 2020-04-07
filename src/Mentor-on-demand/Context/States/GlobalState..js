import React, { useState } from "react";
import AuthContext from "../AuthContext";

const AuthState = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHandler = () => {
    setIsAuthenticated(true);
  };
  return (
    <AuthContext.Provider
      value={{
        login: loginHandler,
        isAuth: isAuthenticated
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
