import React from "react";
import { withRouter } from "react-router-dom";
import DashboardCard from "./DashboardCards/DashboardCards";
import { Container, Row } from "react-bootstrap";

import "./DashboardContent.css";

const DashboardContent = props => {
  const expand = id => {};
  const usersList =
    props.posts.length > 0
      ? props.posts.map((post, index) => (
          <React.Fragment key={post._id}>
            <Row className="justify-content-center">
              <DashboardCard
                expand={expand}
                index={index}
                key={post._id}
                user={post}
              />
            </Row>
          </React.Fragment>
        ))
      : props.posts;
  return <Container className="course-contaner">{usersList}</Container>;
};

export default withRouter(DashboardContent);
