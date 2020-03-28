import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";
import { connect } from "react-redux";

import Rows from "./TableRow/Rows";
import "../Table/Table.css";

class MyTable extends Component {
  render() {
    let tableRows = this.props.users.map(user => {
      return <Rows user={user} key={user.id} />;
    });
    return (
      <div className="custom-table">
        <Container>
          <Table striped bordered hover size="sm">
            <thead className={"thead-dark"}>
              <tr>
                <th>Id</th>
                <th>FirstName</th>
                <th>Last Name</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.userReducer.users
  };
};

export default connect(
  mapStateToProps,
  null
)(MyTable);
