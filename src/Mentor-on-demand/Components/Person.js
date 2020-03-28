import React, { Component } from "react";

class Person extends Component {
  render() {
    return (
      <h2>
        Hi my name is {this.props.person.name} and i am {this.props.person.age}{" "}
        years old
      </h2>
    );
  }
}

export default Person;
