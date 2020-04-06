import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./DashboardCard.css";
import { Link } from "react-router-dom";

const DashboardCard = props => {
  let classes = ["cardStyles"].join(" ");
  const styles = {
    width: "80%",
    marginBottom: "3%"
  };
  const imgStyles = {
    width: "100%",
    height: "300px",
    backgroundImage: `url(https://picsum.photos/id/23${
      props.user.id > 9 ? 0 : props.user.id
    }/200/300)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };
  return (
    <React.Fragment>
      <Card style={styles} className={classes}>
        <Card.Header>
          Java <Link to={"/dashboard/course/" + props.user.id}>Expand</Link>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <h3>{props.user.name}</h3>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.user.email}
          </Card.Subtitle>
          <Container>
            <Row>
              <Col sm={4} md={4} lg={4}>
                <div style={imgStyles} />
              </Col>
              <Col sm={8} md={8} ld={8}>
                <Row>
                  <Col sm={6} lg={6} md={6}>
                    {" "}
                    Education{" "}
                  </Col>
                  <Col sm={6} lg={6} md={6}>
                    {" "}
                    Area of expertise{" "}
                  </Col>
                </Row>
                <Row>
                  <Col sm={6} lg={6} md={6}>
                    {" "}
                    Qualification{" "}
                  </Col>
                  <Col sm={6} lg={6} md={6}>
                    {" "}
                    Experience{" "}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Card.Subtitle>020-2456783</Card.Subtitle>
          <Card.Subtitle>{props.user.email}</Card.Subtitle>
        </Card.Body>
      </Card>
      <br />
    </React.Fragment>
  );
};

export default DashboardCard;
