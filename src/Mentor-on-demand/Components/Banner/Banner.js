import React, { useContext } from "react";
import {
  Jumbotron,
  Container,
  Button,
  Row,
  Col,
  Navbar
} from "react-bootstrap";
import UserContext from "../../Store/Contexts/UserContext";
import { NavLink } from "react-router-dom";

import "../../scss/style.scss";

export const Banner = props => {
  const userContext = useContext(UserContext);
  return (
    <Jumbotron fluid>
      <Container id="general-banner">
        <Row>
          <Col xs={12} md={6} className="d-flex flex-row">
            <h2>
              Welcome{" "}
              {userContext.userState
                ? userContext.userState.myUser.name
                : "Guest"}
            </h2>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-row-reverse">
            {userContext.userState ? (
              <React.Fragment>
                <h4>
                  Welcome back subscribe here for weekly news letters
                  <Button id="general-banner-link" as={NavLink} to="/dashboard">
                    Subscribe
                  </Button>
                </h4>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h4>
                  Sign Up and Boost up you'r career{" "}
                  <Button id="general-banner-link" as={NavLink} to="/login">
                    Sign Up
                  </Button>
                </h4>
              </React.Fragment>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};
