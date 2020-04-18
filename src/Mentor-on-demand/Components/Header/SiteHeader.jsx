import React, { useContext } from "react";
import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import UserContext from "../../Store/Contexts/UserContext";

import "../../scss/style.scss";

const SiteHeader = props => {
  const userContext = useContext(UserContext);
  let { isAuth } = userContext;

  const onClickHandler = e => {
    if (isAuth) {
      userContext.logout();
      props.history.push("/");
    } else props.history.push("/login");
  };

  return (
    <header>
      <Navbar className="main-navbar" fixed="top" expand="xl">
        <Navbar.Brand href="#home">Mentor On Demand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Dashboard</Nav.Link>
            <NavDropdown title="Contact Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Email</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Phone</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fax</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Address</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button onClick={onClickHandler} className="logIn-button">
            {isAuth ? "LogOut" : "LogIn"}
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default withRouter(SiteHeader);
