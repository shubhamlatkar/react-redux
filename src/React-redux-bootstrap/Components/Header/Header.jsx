import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron className="">
      <Container>
        <h1 className="text-left">Header</h1>
      </Container>
    </Jumbotron>
  );
};

export default Header;
