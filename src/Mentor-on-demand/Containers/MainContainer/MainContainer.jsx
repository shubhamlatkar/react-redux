import React from "react";
import SiteHeader from "../../Components/Header/SiteHeader";
import SiteFooter from "../../Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";
import LogInSignUp from "./LogIn-SignUp/LogInSignUp";

const MainContainer = props => {
  const appStyles = {
    height: "100vh"
  };
  return (
    <div className="App" styles={appStyles}>
      <Router>
        <SiteHeader />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={LogInSignUp} />
          <Route path="/signup" component={LogInSignUp} />
        </Switch>
        <SiteFooter />
      </Router>
    </div>
  );
};

export default MainContainer;
