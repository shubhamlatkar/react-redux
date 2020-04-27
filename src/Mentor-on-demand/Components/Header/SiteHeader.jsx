import React, { useContext, useState } from "react";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import UserContext from "../../Store/Contexts/UserContext";

import "../../scss/style.scss";

const SiteHeader = props => {
  const userContext = useContext(UserContext);
  let { isAuth, userState } = userContext;

  const [filterBy, setFilterby] = useState("");

  const onClickHandler = e => {
    if (isAuth) {
      userContext.logout();
      props.history.push("/dashboard");
    } else props.history.push("/login");
  };

  let form = props.handelFilterChange ? (
    <Form className="search-form">
      <button
        className="button"
        onClick={event => {
          event.preventDefault();
          props.handelFilterChange(filterBy);
          setFilterby("");
        }}
      >
        Search
      </button>
      <FormControl
        type="text"
        placeholder="Search"
        value={filterBy}
        onChange={event => setFilterby(event.target.value)}
      />
    </Form>
  ) : null;

  return (
    <header>
      <Navbar className="main-navbar" fixed="top" expand="xl">
        <Navbar.Brand href="#home">Mentor On Demand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {userState && userState.myUser ? form : null}
          </Nav>

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
              form
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
