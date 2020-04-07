import React, { useContext } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import UserContext from "../../Store/Contexts/UserContext";

export const Banner = props => {
  const userContext = useContext(UserContext);
  return (
    <Jumbotron fluid>
      <Container>
        <h1 className="text-left">
          Welcome{" "}
          {userContext.userState.myUser !== undefined
            ? userContext.userState.myUser.name
            : "Guest"}
        </h1>
        <p>You are a registered user</p>
      </Container>
    </Jumbotron>
  );
};
