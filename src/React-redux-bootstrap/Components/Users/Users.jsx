import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "../Users/Users.module.css";
import * as actionTypes from "../../store/actions";
import MyTable from "../UI/Table/Table";

class Users extends Component {
  render() {
    return (
      <div className={styles.UsersDiv}>
        <MyTable />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddUser: temUser =>
      dispatch({ type: actionTypes.ADD_USER, user: temUser })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
