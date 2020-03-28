import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      edit: false,
      name: this.props.user.name,
      email: this.props.user.email
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handleSubmit(event) {
    var editedUser = this.state.user;
    editedUser.name = this.state.name;
    editedUser.email = this.state.email;
    this.props.updateUser(editedUser);
    this.setState({ edit: !this.state.edit });
  }

  handelDelete() {
    this.props.deleteUser(this.state.user.id);
  }

  editUser() {
    this.setState({
      edit: !this.state.edit
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.edit ? (
          <Row>
            <Col sm={2} md={2} lg={2}>
              <h6>{this.state.user.id}</h6>
            </Col>
            <Col sm={4} md={4} lg={4}>
              <input
                type="text"
                id="name"
                value={this.state.name}
                onChange={this.handleNameChange}
                name="name"
              />
            </Col>
            <Col sm={4} md={4} lg={4}>
              <input
                type="text"
                id="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                name="email"
              />
            </Col>
            <Col sm={2} md={2} lg={2}>
              <Row>
                <Col>
                  <button onClick={() => this.handleSubmit()}>Save</button>
                </Col>
                <Col>
                  <button disabled={true}>Del</button>
                </Col>
              </Row>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col sm={2} md={2} lg={2}>
              <h6>{this.state.user.id}</h6>
            </Col>
            <Col sm={4} md={4} lg={4}>
              <h6>{this.state.user.name}</h6>
            </Col>
            <Col sm={4} md={4} lg={4}>
              <h6>{this.state.user.email}</h6>
            </Col>
            <Col sm={2} md={2} lg={2}>
              <Row>
                <Col>
                  <button onClick={() => this.editUser()}>Edit</button>
                </Col>
                <Col>
                  <button onClick={() => this.handelDelete()}>Del</button>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
        <Row />
      </React.Fragment>
    );
  }
}
export default TableRow;
