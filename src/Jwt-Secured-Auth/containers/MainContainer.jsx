import React from "react";
import { Redirect } from "react-router";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import EditModal from "../components/EditModal/EditModal";
import Table from "../components/Table/Table";
import "../scss/styles.scss";
import StudentState from "../store/states/StudentState";
import UserState from "../store/states/UserState";
const MainContainer = React.memo((props) => {
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
