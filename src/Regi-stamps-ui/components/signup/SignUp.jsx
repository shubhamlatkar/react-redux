import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const signup = (props) => {
  return (
    <React.Fragment>
      <Card.Title>
        <h2>Sign Up</h2>
      </Card.Title>
      <Form id="custom-login-form">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
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
        </Form.Group>

        <Button id="custom-login-form-btn" variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default signup;
