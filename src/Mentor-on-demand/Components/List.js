import React, { Component } from "react";
import Person from "./Person";

class List extends Component {
  render() {
    const persons = [
      {
        id: 1,
        name: "shu",
        age: 21
      },
      {
        id: 2,
        name: "knu",
        age: 22
      },
      {
        id: 3,
        name: "Pre",
        age: 23
      }
    ];

    const personList = persons.map(person => (
      <Person key={person.id} person={person} />
    ));
    return <div>{personList}</div>;
  }
}

export default List;
