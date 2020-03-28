import React, { Component } from "react";
import Dashboard from "./Components/Dashboard";
import SiteHeader from "./Components/SiteHeader";
import LogIn from "./Components/LogIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      msg: "shubham"
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(name) {
    console.log(`My name is ${name}`);
  }

  render() {
    const appStyles = {
      height: "100vh"
    };
    return (
      <div className="App" styles={appStyles}>
        <SiteHeader />
        <Router>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route
              path="/dashboard"
              component={Dashboard}
              clickHandler={this.clickHandler}
            />
            <Route path="/login" component={LogIn} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
