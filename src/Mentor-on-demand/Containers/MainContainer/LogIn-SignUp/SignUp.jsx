import React, { useState } from "react";
import { Card, Form, Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import "./LogIn.css";

const SignUp = props => {
  const [userType, setUserType] = useState(Boolean);

  const toggleUserHandler = event => {
    setUserType(!userType);
  };
  return (
    <React.Fragment>
      <Card.Title>
        <h2>Sign Up</h2>
      </Card.Title>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group
          className="form-inline login-styles"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Remember Me" />
          <ButtonGroup toggle className="mb-2">
            <ToggleButton
              type="checkbox"
              value={userType}
              checked={userType}
              onChange={event => toggleUserHandler(event)}
            >
              {userType ? "Mentor" : "Student"}
            </ToggleButton>
          </ButtonGroup>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default SignUp;
