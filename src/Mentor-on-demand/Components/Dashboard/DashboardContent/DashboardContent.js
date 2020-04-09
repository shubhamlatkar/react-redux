import React from "react";
import { withRouter } from "react-router-dom";
import DashboardCard from "./DashboardCards/DashboardCards";
import { Container, Row } from "react-bootstrap";

const DashboardContent = props => {
  const expand = id => {};
  const usersList =
    props.posts.length > 0
      ? props.posts.map((user, index) => (
          <React.Fragment key={user.id}>
            <Row className="justify-content-center">
              <DashboardCard
                expand={expand}
                index={index}
                key={user.id}
                user={user}
              />
            </Row>
          </React.Fragment>
        ))
      : props.posts;
  return <Container>{usersList}</Container>;
};

export default withRouter(DashboardContent);
