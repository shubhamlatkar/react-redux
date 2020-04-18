import React, { useContext } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import UserContext from "../../Store/Contexts/UserContext";
import "./Banner.css";

export const Banner = props => {
  const userContext = useContext(UserContext);
  return (
    <Jumbotron fluid>
      <Container>
        <h1 className="text-left">
          Welcome{" "}
          {userContext.userState !== undefined
            ? userContext.userState.name
            : "Guest"}
        </h1>
        <p>You are a registered user</p>
      </Container>
    </Jumbotron>
  );
};
