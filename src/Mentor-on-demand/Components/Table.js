import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TableRow from "./TableRows";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [...this.props.MyUsers]
    };
  }

  static getDerivedStateFromProps(props, state) {
    let tem = [...props.MyUsers];
    state.users = tem;
    return state;
  }

  render() {
    const rows = this.state.users.map(user => {
      return (
        <TableRow
          user={user}
          key={user.id}
          updateUser={this.props.updateUser}
          deleteUser={this.props.deleteUser}
        />
      );
    });
    return (
      <Container>
        <Row>
          <Col sm={2} md={2} lg={2}>
            <h6>
              <b>Id</b>
            </h6>
          </Col>
          <Col sm={4} md={4} lg={4}>
            <h6>
              <b>Name</b>
            </h6>
          </Col>
          <Col sm={4} md={4} lg={4}>
            <h6>
              <b>Email</b>
            </h6>
          </Col>
          <Col sm={2} md={2} lg={2}>
            <h6>
              <b>Options</b>
            </h6>
          </Col>
        </Row>
        {rows}
      </Container>
    );
  }
}

export default Table;
