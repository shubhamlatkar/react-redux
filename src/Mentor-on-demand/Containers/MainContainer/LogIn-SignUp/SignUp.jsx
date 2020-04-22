import React, { useState, useContext } from "react";
import {
  Card,
  Form,
  Button,
  ButtonGroup,
  ToggleButton,
  Spinner
} from "react-bootstrap";
import "./LogIn.css";
import UserContext from "../../../Store/Contexts/UserContext";
import { Redirect } from "react-router-dom";

const SignUp = props => {
  const userContext = useContext(UserContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    type: false
  });

  const toggleUserHandler = event => {
    setUser({ ...user, type: !user.type });
    if (!user.type) props.history.push("/signup/mentor");
  };

  const onChangeHandler = event => {
    let temUser = { ...user };
    temUser[event.target.name] = event.target.value;
    setUser(temUser);
  };

  const submitHandler = event => {
    event.preventDefault();
    userContext.signup({
      name: user.name,
      email: user.email,
      password: user.password,
      type: user.type
    });
  };
  let logForm = (
    <React.Fragment>
      <Card.Title>
        <h2>Sign Up</h2>
      </Card.Title>
      <Form id="custom-login-form">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={e => onChangeHandler(e)}
            type="text"
            name="name"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={e => onChangeHandler(e)}
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={e => onChangeHandler(e)}
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group
          className="form-inline login-styles"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Remember Me" />
          <ButtonGroup toggle className="mb-2">
            <ToggleButton
              type="checkbox"
              value={user.type}
              checked={user.type}
              onChange={event => toggleUserHandler(event)}
              id="custom-login-form-btn"
            >
              {user.type ? "Mentor" : "Student"}
            </ToggleButton>
          </ButtonGroup>
        </Form.Group>
        <Button
          id="custom-login-form-btn"
          onClick={e => submitHandler(e)}
          variant="primary"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
    </React.Fragment>
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
};

export default SignUp;
