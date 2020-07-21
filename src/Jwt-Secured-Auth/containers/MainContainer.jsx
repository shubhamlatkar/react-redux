import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../scss/styles.scss";
import UserState from "../store/states/UserState";
import Dashboard from "../components/Dashboard";
import Table from "../components/Table/Table";
import EditModal from "../components/EditModal/EditModal";
import StudentState from "../store/states/StudentState";
const MainContainer = React.memo(props => {
  const appStyles = {
    height: "100vh"
  };

  return (
    <div className="App" styles={appStyles}>
      <UserState>
        <StudentState>
          <Router>
            <Switch>
              <Route path="/login" component={Dashboard} />
              <Route path="/signup" component={Dashboard} />
              <Route path="/table" exact component={Table} />
              <Route path="/table/:id" component={EditModal} />
              <Redirect from="/" exact to="/table" />
            </Switch>
          </Router>
        </StudentState>
      </UserState>
    </div>
  );
});

export default MainContainer;
