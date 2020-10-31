import React, { useContext, useEffect, useState } from "react";
import { Button, ButtonGroup, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/context/AuthContext";

const header = (props) => {
  const handleAuthClick = (value) => {
    if (value === "login") props.history.push("/login");
    else if (value === "signup") props.history.push("/signup");
    else if (value === "logout") logout();
  };

  const userContext = useContext(AuthContext);

  const { userState, logout } = userContext;
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (userState && userState.isAuth && !userState.error)
      setUsername(userState.username);
  }, [userState, userState && userState.error, userState && userState.isAuth]);

  let auth = (
    <ButtonGroup aria-label="Auth Buttons" size="sm">
      <Button
        variant="primary"
        onClick={(event) => {
          handleAuthClick("login");
        }}
      >
        Log In
      </Button>
      <Button
        variant="primary"
        onClick={(event) => {
          handleAuthClick("signup");
        }}
      >
        Sign Up
      </Button>
    </ButtonGroup>
  );

  if (username !== "") {
    auth = (
      <Button
        variant="primary"
        onClick={(event) => {
          handleAuthClick("logout");
        }}
      >
        Log Out
      </Button>
    );
  }
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Stamp Registration</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" defaultActiveKey="/">
            <Nav.Link as={NavLink} to="/">
              Dashboard
            </Nav.Link>
            {username !== "" ? (
              <React.Fragment>
                <Nav.Link as={NavLink} to="/add-property">
                  Add Property
                </Nav.Link>
                <Nav.Link as={NavLink} to="/search-property">
                  Search Property
                </Nav.Link>
              </React.Fragment>
            ) : null}
          </Nav>
          {auth}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default header;
