import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }
  render() {
    return (
      <Row>
        <Col sm={3} md={3} lg={3}>
          <h6>{this.state.user.id}</h6>
        </Col>
        <Col sm={3} md={3} lg={3}>
          <h6>{this.state.user.firstName}</h6>
        </Col>
        <Col sm={3} md={3} lg={3}>
          <h6>{this.state.user.lastName}</h6>
        </Col>
        <Col sm={3} md={3} lg={3}>
          <h6>{this.state.user.balance}</h6>
        </Col>
      </Row>
    );
  }
}

export default TableRow;
