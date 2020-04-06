import React from "react";
import { Card, Nav } from "react-bootstrap";
import { Route, Switch } from "react-router";

import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { NavLink } from "react-router-dom";

const LogInSignUp = props => {
  const cardStyles = {
    marginBottom: "3%",
    maxWidth: "500px",
    width: "80%",
    margin: "17% auto"
  };
  return (
    <React.Fragment>
      <Card style={cardStyles}>
        <Card.Header>
          <Nav fill justify variant="tabs" defaultActiveKey="/login">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/signup">
                SignUp
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Switch>
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Card.Body>
      </Card>
      <br />
    </React.Fragment>
  );
};

export default LogInSignUp;
