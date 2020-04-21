import React, { useState, useContext } from "react";
import {
  Card,
  Form,
  Button,
  ToggleButton,
  ButtonGroup,
  Spinner,
  Alert,
  Container
} from "react-bootstrap";
import "./LogIn.css";
import UserContext from "../../../Store/Contexts/UserContext";
import { withRouter, Redirect } from "react-router";

const LogIn = React.memo(props => {
  const userContext = useContext(UserContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
    type: false
  });

  const toggleUserHandler = event => {
    setUser({ ...user, type: !user.type });
  };

  const submitHandler = event => {
    event.preventDefault();

    userContext.login(user.email, user.password, user.type);
  };

  const handelOnchange = event => {
    let temUser = { ...user };
    temUser[event.target.type] = event.target.value;
    setUser(temUser);
  };

  let logForm = (
    <Container className="">
      <Card.Title>
        <h2>Log In</h2>
      </Card.Title>
      {userContext.userState && userContext.userState.error ? (
        <Alert variant="danger">{userContext.userState.error}</Alert>
      ) : null}
      <Form className="custom-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={e => handelOnchange(e)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={e => handelOnchange(e)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group
          className="form-inline login-styles"
          controlId="formBasicCheckbox"
        >
          <ButtonGroup toggle className="mb-2">
            <ToggleButton
              type="checkbox"
              value={user.type}
              checked={user.type}
              onChange={event => toggleUserHandler(event)}
              className="custom-form-btn"
            >
              {user.type ? "Mentor" : "Student"}
            </ToggleButton>
          </ButtonGroup>
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={event => submitHandler(event)}
          className="custom-form-btn"
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
  if (userContext.isAuth) {
    logForm =
      userContext.userState && userContext.userState.type ? (
        <Redirect to="/dashboard" />
      ) : (
        <Redirect to="/dashboard" />
      );
  }

  return logForm;
});

export default withRouter(LogIn);
