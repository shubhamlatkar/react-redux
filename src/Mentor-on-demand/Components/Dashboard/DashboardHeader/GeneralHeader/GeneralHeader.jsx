import React from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container
} from "react-bootstrap";
import styles from "../DashboardHeader.module.css";

export const GeneralHeader = props => (
  <section className={styles.Padding}>
    <Navbar bg="primary" varient="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">User</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Cources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Java</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">AI</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">React</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Database</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </section>
);
