import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export const Banner = props => (
  <Jumbotron fluid>
    <Container>
      <h1 className="text-left">
        {" "}
        Welcome {props.username ? props.username.email : " "}
      </h1>
      <p>You are a registered user</p>
    </Container>
  </Jumbotron>
);
