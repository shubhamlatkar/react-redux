import React from "react";
import { Card, Nav } from "react-bootstrap";
import { Route, Switch, withRouter } from "react-router";

import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { NavLink } from "react-router-dom";
import TrainerModal from "../../../Components/TrainerCreation/TrainerModal";
import SiteHeader from "../../../Components/Header/SiteHeader";

const LogInSignUp = props => {
  return (
    <React.Fragment>
      <SiteHeader handelFilterChange={null} />

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
          <Route path="/signup/mentor" component={TrainerModal} />
        </Card.Body>
      </Card>
      <br />
    </React.Fragment>
  );
};

export default withRouter(LogInSignUp);
