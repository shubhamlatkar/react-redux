import React, { useContext } from "react";

import Ingredients from "./Components/Ingredients/Ingredients";
import { AuthContext } from "./context/auth-context";
import Auth from "./Components/Auth";
// import "./App.css";

const App = props => {
  const authContext = useContext(AuthContext);
  let content = authContext.isAuth ? <Ingredients /> : <Auth />;

  return content;
};

export default App;
