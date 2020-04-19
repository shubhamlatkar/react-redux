import React, { useState, useContext } from "react";
import { Card, Form, Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import "./LogIn.css";
import UserContext from "../../../Store/Contexts/UserContext";

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
    userContext.signup(user.name, user.email, user.password, user.type);
  };
  return (
    <React.Fragment>
      <Card.Title>
        <h2>Sign Up</h2>
      </Card.Title>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={e => onChangeHandler(e)}
            type="text"
            name="name"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
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

        <Form.Group controlId="formBasicPassword">
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
            >
              {user.type ? "Mentor" : "Student"}
            </ToggleButton>
          </ButtonGroup>
        </Form.Group>
        <Button onClick={e => submitHandler(e)} variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default SignUp;
