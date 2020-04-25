import React, { useContext } from "react";
import { Navbar, ButtonGroup, Container, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../../../Store/Contexts/UserContext";

const PersonalHeader = props => {
  const userContext = useContext(UserContext);
  return (
    <Navbar className="general-header">
      <Container>
        <div className="mr-auto">
          <Navbar.Brand href="#home">
            {userContext.userState.myUser
              ? userContext.userState.myUser.name
              : null}
          </Navbar.Brand>
        </div>
        <div>
          <Link className="general-header-links" to="/dashboard/profile">
            profile
          </Link>
          <Link className="general-header-links" to="/dashboard/trainings">
            trainings
          </Link>
          <Link className="general-header-links" to="/dashboard/notifications">
            notifications
          </Link>
          <Link className="general-header-links" to="/dashboard">
            New Course
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default PersonalHeader;
