import React, { Component } from "react";
import DashboardCard from "./DashboardCards";
import { Container, Row } from "react-bootstrap";

class DashboardContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedUser: null
    };
  }

  deletePersonHandler = deletePersonIndex => {
    this.setState({ clickedUser: this.props.posts[deletePersonIndex] });
  };

  render() {
    const usersList = this.props.posts.map((user, index) => (
      <React.Fragment key={user.id}>
        <Row className="justify-content-center">
          <DashboardCard
            del={() => this.deletePersonHandler(index)}
            index={index}
            key={user.id}
            user={user}
          />
        </Row>
      </React.Fragment>
    ));
    return (
      <Container>
        {usersList} <br />
        <p>{this.state.clickedUser ? this.state.clickedUser.email : ""}</p>
        {/* <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item active>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Item disabled>{6}</Pagination.Item>
          <Pagination.Ellipsis /> 
          <Pagination.Item>{7}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination> */}
      </Container>
    );
  }
}

export default DashboardContent;
