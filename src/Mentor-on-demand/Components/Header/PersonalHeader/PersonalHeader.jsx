import React, { useContext } from "react";
import { Navbar, ButtonGroup, Container, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../../../Store/Contexts/UserContext";

const PersonalHeader = props => {
  const userContext = useContext(UserContext);
  return (
    <Navbar className="general-header">
      <Container>
        <Navbar.Brand className="mr-auto" href="#home">
          {userContext.userStatemyUser.name}
        </Navbar.Brand>
        <ButtonGroup className="general-header-link" aria-label="Basic example">
          <Button as={NavLink} to="/dashboard" id="general-header-link">
            New Course
          </Button>
          <Button
            as={NavLink}
            to="/dashboard/notifications"
            id="general-header-link"
          >
            notifications
          </Button>
          <Button
            as={NavLink}
            to="/dashboard/trainings"
            id="general-header-link"
          >
            trainings
          </Button>
          <Button as={NavLink} to="/dashboard" id="general-header-link">
            Edit
          </Button>
        </ButtonGroup>
      </Container>
    </Navbar>
  );
};

export default PersonalHeader;
