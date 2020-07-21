import React, { useState, useContext, useEffect } from "react";
import {
  Card,
  Form,
  Button,
  ButtonGroup,
  ToggleButton,
  Spinner,
  Alert
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import UserContext from "../../store/context/UserContext";

const SignUp = props => {
  let [signupLoading, setSignupLoading] = useState(false);
  let [signupSuccess, setSignupSuccess] = useState(false);

  const userContext = useContext(UserContext);
  let { tryAutoLogin, userState, signup } = userContext;

  useEffect(() => {
    if (userState && !userState.isAuth) tryAutoLogin();
  }, [tryAutoLogin]);

  useEffect(() => {
    if (userState && userState.signup) {
      setSignupSuccess(true);
    }
  }, [userState && userState.signup, signupSuccess]);

  useEffect(() => {
    setSignupLoading(userState && userState.loading);
  }, [userState && userState.loading, signupLoading]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    type: false
  });

  const toggleUserHandler = event => {
    setUser({ ...user, type: !user.type });
  };

  const onChangeHandler = event => {
    let temUser = { ...user };
    temUser[event.target.name] = event.target.value;
    setUser(temUser);
  };

  const submitHandler = event => {
    event.preventDefault();
    signup(user);
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
              {user.type ? "Admin" : "User"}
            </ToggleButton>
          </ButtonGroup>
        </Form.Group>
        {userState && userState.error && (
          <Alert variant="danger">Sorry.... Username or Email not aval</Alert>
        )}
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

  logForm = signupLoading ? (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  ) : (
    logForm
  );

  if (signupSuccess) {
    logForm = <Redirect to="/login" />;
  }
  return logForm;
};

export default SignUp;
