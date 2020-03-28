import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";

class LogIn extends Component {
  render() {
    const cardStyles = {
      marginBottom: "3%",
      width: "50%",
      margin: "10% auto"
    };
    return (
      <React.Fragment>
        <Card style={cardStyles}>
          <Card.Header>LogIn</Card.Header>
          <Card.Body>
            <Card.Title>
              <h2>Log In</h2>
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
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <br />
      </React.Fragment>
    );
  }
}

export default LogIn;
