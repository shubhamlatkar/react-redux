import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../scss/styles.scss";
import UserState from "../store/states/UserState";
import Dashboard from "../components/Dashboard";
import Table from "../components/Table/Table";
const MainContainer = React.memo(props => {
  const appStyles = {
    height: "100vh"
  };

  return (
    <div className="App" styles={appStyles}>
      <UserState>
        <Router>
          <Switch>
            <Route path="/login" component={Dashboard} />
            <Route path="/signup" component={Dashboard} />
            <Route path="/table" component={Table} />
            <Redirect from="/" exact to="/table" />
          </Switch>
        </Router>
      </UserState>
    </div>
  );
});

export default MainContainer;
