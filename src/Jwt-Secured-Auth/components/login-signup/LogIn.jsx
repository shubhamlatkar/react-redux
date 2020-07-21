import React, { useState, useContext, useEffect } from "react";
import { Card, Form, Button, Spinner, Alert, Container } from "react-bootstrap";
import { withRouter, Redirect } from "react-router";
import UserContext from "../../store/context/UserContext";

const LogIn = React.memo(props => {
  const userContext = useContext(UserContext);

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const submitHandler = event => {
    event.preventDefault();
    userContext.login(user.username, user.password);
  };

  const handelOnchange = event => {
    let temUser = { ...user };
    temUser[event.target.name] = event.target.value;
    setUser(temUser);
  };

  let logForm = (
    <Container className="">
      <Card.Title>
        <h2>Log In</h2>
      </Card.Title>

      <Form id="custom-login-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={e => handelOnchange(e)}
            type="text"
            placeholder="Enter Username"
            value={user.username}
            name="username"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={e => handelOnchange(e)}
            type="password"
            placeholder="Password"
            value={user.password}
            name="password"
          />
        </Form.Group>
        <Form.Group
          className="form-inline login-styles"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={event => submitHandler(event)}
          id="custom-login-form-btn"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );

  logForm =
    userContext.userState && userContext.userState.loading ? (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    ) : (
      logForm
    );

  if (userContext.userState && userContext.userState.isAuth) {
    logForm = <Redirect to="/table" />;
  }

  return logForm;
});

export default withRouter(LogIn);
