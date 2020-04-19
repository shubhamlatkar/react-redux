import React from "react";
import { Card, Container, Row, Col, Figure, Badge } from "react-bootstrap";
import "../../../../scss/style.scss";
import { Link } from "react-router-dom";

const DashboardCard = props => {
  let user = props.user;
  const url = `https://picsum.photos/id/23${
    props.index > 9 ? 0 : props.index
  }/150/150`;

  return (
    <React.Fragment>
      <Card className="course-card">
        <Card.Header className="card-header">
          <Link to={"/dashboard/course/" + props.user._id}>
            <div className="d-inline-block mr-auto">
              <h3>{user.title}</h3>
            </div>
            <Badge variant="secondary">Enroll Now</Badge>
          </Link>
        </Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col sm={4} md={4} lg={4}>
                {/* <div style={imgStyles} className="imgStyles" /> */}

                <Figure>
                  <Figure.Image
                    width={150}
                    height={150}
                    alt={user.title}
                    src={url}
                  />
                </Figure>
              </Col>
              <Col sm={8} md={8} ld={8}>
                <Row className="justify-content-start">
                  <Card.Subtitle className="mb-2 text-muted">
                    <ul className="course-card-list">
                      <li>{user.lectures} lectures</li>
                      <li>{user.duration}</li>
                      <li>{user.levels}</li>
                      <li>{user.fee}</li>
                    </ul>
                  </Card.Subtitle>
                </Row>
                <Row className="justify-content-start">
                  <Col sm={8} lg={8} md={8}>
                    {user.description}
                  </Col>
                  <Col sm={4} lg={4} md={4}>
                    ({user.reviews} reviews)
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-end">
              <Col sm={4} lg={4} md={4}>
                <Card.Subtitle>020-2456783</Card.Subtitle>
              </Col>
              <Col sm={4} lg={4} md={4}>
                <Card.Subtitle>{user.email || "test"}</Card.Subtitle>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <br />
    </React.Fragment>
  );
};

export default DashboardCard;
