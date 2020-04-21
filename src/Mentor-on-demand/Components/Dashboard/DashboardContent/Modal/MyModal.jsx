import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Card,
  ListGroup,
  Spinner,
  Container,
  Row,
  Col
} from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { withRouter } from "react-router";
import CourseContext from "../../../../Store/Contexts/CourseContext";
import UserContext from "../../../../Store/Contexts/UserContext";
import "../../../../scss/style.scss";

const MyModal = props => {
  const [show, setShow] = useState(true);

  const courseContext = useContext(CourseContext);
  let { courses, getCourses, enrollCourse } = courseContext;

  const userContext = useContext(UserContext);
  let { isAuth } = userContext;

  useEffect(() => {
    if (!courses) getCourses();
  }, [getCourses, courses]);

  const handleClose = () => {
    props.history.push("/");
    setShow(false);
  };

  const handelEnrollCourse = event => {
    if (isAuth) {
      enrollCourse(props.match.params.id);
      props.history.push("/dashboard/trainings");
    } else {
      props.history.push("/login");
    }
  };

  var course = null;
  course = courses.filter(course => course._id === props.match.params.id);
  course = course[0];

  let display = course ? (
    <React.Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="course-modal"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {course.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="show-grid">
              <Col xs={12} md={6}>
                <Card>
                  <Card.Header>{course.description} </Card.Header>
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        {course.lectures} Lectures
                      </ListGroup.Item>
                      <ListGroup.Item>{course.duration}</ListGroup.Item>
                      <ListGroup.Item>{course.levels}</ListGroup.Item>
                      <ListGroup.Item>{course.fee} Fess</ListGroup.Item>
                      <ListGroup.Item>{course.reviews} Reviews</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <Card.Header>
                    Your Mentor is {course.trainerDetails.name}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      Industry exprience of {course.trainerDetails.exprience}yrs
                    </Card.Title>
                    <Card.Text>{course.trainerDetails.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={12} md={12}>
                <Card>
                  <Card.Header>Topics to be coverd in the course </Card.Header>
                  <Card.Body>
                    <ListGroup variant="flush">
                      {course.topics.map((topic, index) => {
                        return (
                          <ListGroup.Item key={index}>
                            {topic.name}
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelEnrollCourse}>
            {isAuth ? "Enroll Now" : "Sign in and Enroll"}
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  ) : (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
  return display;
};

export default withRouter(MyModal);
