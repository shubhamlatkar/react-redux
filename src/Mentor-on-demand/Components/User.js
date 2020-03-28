import React, { Component } from "react";
import styles from "./User.module.css";

class User extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    return this.state.isLoggedIn ? (
      <div className={` ${styles.successStyle} ${styles.fontStyle}`}>
        <p>Hi Username</p>
      </div>
    ) : (
      <div className={` ${styles.errorStyle} ${styles.fontStyle}`}>
        <p>Hi Guest</p>
      </div>
    );
  }
}

export default User;
