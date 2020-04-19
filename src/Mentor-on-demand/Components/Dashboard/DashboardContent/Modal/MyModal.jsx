import React, { useState, useEffect, useContext } from "react";
import { Button, Card, ListGroup, Spinner } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { withRouter } from "react-router";
import CourseContext from "../../../../Store/Contexts/CourseContext";

const MyModal = props => {
  const [show, setShow] = useState(true);

  const courseContext = useContext(CourseContext);

  let { courses, getCourses, getMentor, mentor } = courseContext;

  useEffect(() => {
    if (!courses) getCourses();
  }, [getCourses, courses]);

  const handleClose = () => {
    props.history.push("/");
    setShow(false);
  };

  var course = null;
  course = courses.filter(course => course._id === props.match.params.id);
  course = course[0];
  useEffect(() => {
    if (courses && course) getMentor(course.owner);
  }, [getMentor, course, courses]);

  let display =
    course && mentor ? (
      <React.Fragment>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{course.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Body>
                <Card.Title>{course.description}</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>{course.lectures} Lectures</ListGroup.Item>
                  <ListGroup.Item>{course.duration}</ListGroup.Item>
                  <ListGroup.Item>{course.levels}</ListGroup.Item>
                  <ListGroup.Item>{course.fee} Fess</ListGroup.Item>
                  <ListGroup.Item>{course.reviews} Reviews</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Your Mentor is {mentor.name}</Card.Header>
              <Card.Body>
                <Card.Title>
                  Industry exprience of {mentor.exprience || 12}yrs
                </Card.Title>
                <Card.Text>
                  {mentor.description || "mentor description"}
                </Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Enroll Now
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
