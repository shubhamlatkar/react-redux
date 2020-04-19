import React from "react";
import { Navbar, ButtonGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PersonalHeader = props => {
  return (
    <Navbar className="general-header">
      <Container>
        <Navbar.Brand className="mr-auto" href="#home">
          Brand link
        </Navbar.Brand>
        <ButtonGroup aria-label="Basic example">
          <Link variant="secondary" to="/dashboard">
            dashboard
          </Link>
          <Link variant="secondary" to="/dashboard/notifications">
            notifications
          </Link>
          <Link variant="secondary" to="/dashboard/trainings">
            trainings
          </Link>
          <Link variant="secondary" to="/dashboard">
            Edit
          </Link>
        </ButtonGroup>
      </Container>
    </Navbar>
  );
};

export default PersonalHeader;
