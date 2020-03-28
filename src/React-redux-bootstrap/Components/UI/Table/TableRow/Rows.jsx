import React, { Component } from "react";

class Rows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }
  render() {
    return (
      <tr>
        <td>{this.state.user.id}</td>
        <td>{this.state.user.firstName}</td>
        <td>{this.state.user.lastName}</td>
        <td>{this.state.user.balance}</td>
      </tr>
    );
  }
}

export default Rows;
