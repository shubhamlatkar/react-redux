import React, { useState } from "react";
import { Card, Form, Button, ToggleButton, ButtonGroup } from "react-bootstrap";
import "./LogIn.css";

const LogIn = props => {
  const [userType, setUserType] = useState(Boolean);

  const toggleUserHandler = event => {
    setUserType(!userType);
  };
  return (
    <React.Fragment>
      <Card.Title>
        <h2>Log In</h2>
      </Card.Title>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group
          className="form-inline login-styles"
          controlId="formBasicCheckbox"
        >
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
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default LogIn;
