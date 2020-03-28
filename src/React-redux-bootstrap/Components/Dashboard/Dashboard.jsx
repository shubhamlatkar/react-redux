import React, { Component } from "react";
import { Route, Redirect, Switch, NavLink } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import { connect } from "react-redux";

import InputForm from "../Form/InputForm";
import Users from "../Users/Users";
import Landing from "../Landing/Landing";
import styles from "../Dashboard/Dashboard.module.css";
import * as actionTypes from "../../store/actions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.saveCards();
  }
  render() {
    return (
      <Container className={styles.Dashboard}>
        <Nav fill justify variant="tabs" defaultActiveKey="/landing">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/landing">
              Landing
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/input">
              Form
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/users">
              Users
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route path="/input" component={InputForm} />
          <Route path="/users" component={Users} />
          <Route path="/landing" component={Landing} />
          <Redirect from="/" exact to="/landing" />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveCards: () => dispatch(actionTypes.getAllCards())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Dashboard);
