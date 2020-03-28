import React, { Component } from "react";
import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import LogIn from "./LogIn";

class SiteHeader extends Component {
  render() {
    const headerStyles = {
      minHeight: "0%"
    };
    return (
      <header>
        <Navbar
          style={headerStyles}
          bg="dark"
          fixed="top"
          varient="dark"
          expand="xl"
        >
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
            <Router>
              <Link to="/login">
                <Button variant="outline-primary">Login</Button>
              </Link>
            </Router>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default SiteHeader;
