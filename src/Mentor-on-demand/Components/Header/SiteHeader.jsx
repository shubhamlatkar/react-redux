import React, { useContext, useState } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import UserContext from "../../Store/Contexts/UserContext";

import "../../scss/style.scss";

const SiteHeader = props => {
  const userContext = useContext(UserContext);
  const [filterBy, setFilterby] = useState("");

  let { isAuth } = userContext;

  const onClickHandler = e => {
    if (isAuth) {
      userContext.logout();
      props.history.push("/dashboard");
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
          {/* <Button onClick={onClickHandler} className="button">
            {isAuth ? "LogOut" : "LogIn"}
          </Button> */}
          <div>
            {isAuth ? (
              <React.Fragment>
                <Link className="button" to="/dashboard/profile">
                  profile
                </Link>
                <Link className="button" to="/dashboard/trainings">
                  trainings
                </Link>
                <Link className="button" to="/dashboard/notifications">
                  notifications
                </Link>
                <Link className="button" to="/dashboard">
                  New Course
                </Link>
              </React.Fragment>
            ) : (
              <Form className="search-form">
                <FormControl
                  type="text"
                  placeholder="Search"
                  value={filterBy}
                  onChange={event => setFilterby(event.target.value)}
                />
                <Button
                  className="general-header-search-btn"
                  onClick={event => {
                    props.handelFilterChange(filterBy);
                    setFilterby("");
                  }}
                >
                  Search
                </Button>
              </Form>
            )}
            <button className="button" onClick={onClickHandler}>
              {isAuth ? "LogOut" : "LogIn"}
            </button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default withRouter(SiteHeader);
