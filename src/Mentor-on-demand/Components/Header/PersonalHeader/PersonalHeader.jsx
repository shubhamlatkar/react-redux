import React from "react";
import { Navbar, ButtonGroup, Button, Container } from "react-bootstrap";

const PersonalHeader = props => {
  return (
    <Navbar className="general-header">
      <Container>
        <Navbar.Brand className="mr-auto" href="#home">
          Brand link
        </Navbar.Brand>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>
      </Container>
    </Navbar>
  );
};

export default PersonalHeader;
