import React, { useEffect, useContext } from "react";
import SiteHeader from "../../Components/Header/SiteHeader";
import SiteFooter from "../../Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";
import LogInSignUp from "./LogIn-SignUp/LogInSignUp";
import UserState from "../../Store/States/UserState.";
import CourseState from "../../Store/States/CourseState";

const MainContainer = props => {
  const appStyles = {
    height: "100vh"
  };
  return (
    <div className="App" styles={appStyles}>
      <UserState>
        <Router>
          <SiteHeader />
          <CourseState>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/login" component={LogInSignUp} />
              <Route path="/signup" component={LogInSignUp} />
            </Switch>
          </CourseState>
          <SiteFooter />
        </Router>
      </UserState>
    </div>
  );
};

export default MainContainer;
