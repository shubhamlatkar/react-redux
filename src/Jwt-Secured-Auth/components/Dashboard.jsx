import React, { useContext, useEffect } from "react";
import { Card, Nav } from "react-bootstrap";
import { Route, withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import UserContext from "../store/context/UserContext";
import LogIn from "./login-signup/LogIn";
import SignUp from "./login-signup/SignUp";

const dashboard = React.memo(props => {
  const userContext = useContext(UserContext);
  let { tryAutoLogin, userState } = userContext;

  useEffect(() => {
    tryAutoLogin();
  }, [tryAutoLogin]);

  return (
    <Card className="login-signup-card">
      <Card.Header>
        <Nav fill justify variant="tabs" defaultActiveKey="/login">
          <Nav.Item>
            <Nav.Link
              as={NavLink}
              to="/login"
              className="login-signup-card-link"
            >
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={NavLink}
              to="/signup"
              className="login-signup-card-link"
            >
              SignUp
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
      </Card.Body>
    </Card>
  );
});

export default withRouter(dashboard);
