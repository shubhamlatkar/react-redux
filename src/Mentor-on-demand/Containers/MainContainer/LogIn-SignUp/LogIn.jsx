import React, { useState, useContext } from "react";
import { Card, Form, Button, ToggleButton, ButtonGroup } from "react-bootstrap";
import "./LogIn.css";
import UserContext from "../../../Store/Contexts/UserContext";
import { withRouter } from "react-router";

const LogIn = props => {
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
    props.history.push("/");
  };

  const handelOnchange = event => {
    let temUser = { ...user };
    temUser[event.target.type] = event.target.value;
    setUser(temUser);
  };
  return (
    <React.Fragment>
      <Card.Title>
        <h2>Log In</h2>
      </Card.Title>
      <Form>
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
        >
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default withRouter(LogIn);
