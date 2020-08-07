import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";
import SiteFooter from "../../Components/Footer/Footer";
import CourseState from "../../Store/States/CourseState";
import UserState from "../../Store/States/UserState.";
import LogInSignUp from "./LogIn-SignUp/LogInSignUp";

const MainContainer = (props) => {
  const appStyles = {
    height: "100vh"
  };
  return (
    <div className="App" styles={appStyles}>
      <UserState>
        <Router>
          <CourseState>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/login" component={LogInSignUp} />
              <Route path="/signup" component={LogInSignUp} />
              <Route path="/**" exact component={Dashboard} />
            </Switch>
          </CourseState>
          <SiteFooter />
        </Router>
      </UserState>
    </div>
  );
};

export default MainContainer;
