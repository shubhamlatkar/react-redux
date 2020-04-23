import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  ProgressBar,
  Row,
  Col,
  Button,
  Form
} from "react-bootstrap";
import TableRow from "./TableRows/TableRows";

const CurrentTrainings = props => {
  let [edit, setEdit] = useState(false);
  let [displayCourse, setDisplayCourse] = useState(<React.Fragment />);
  let [course, setCourse] = useState(
    props.course.courseData
      ? { ...props.course.courseData }
      : { ...props.course }
  );

  const onchangeHandlerRow = useCallback(
    (_id, type, title) => {
      if (type) {
        course.topics.forEach(topic => {
          if (topic._id === _id) topic.status = !topic.status;
        });
      } else {
      }
      console.log("course", course);
    },
    [course]
  );

  useEffect(() => {
    let coursDisplay = !edit ? (
      <Container>
        <div className="card cur-training">
          <div className="card-header badge-info cur-training-header">
            <Row>
              <Col sm={11} md={11} lg={11}>
                <h4>{course.title}</h4>
              </Col>
              <Col sm={1} md={1} lg={1}>
                <Button onClick={event => setEdit(!edit)}>Edit</Button>
              </Col>
            </Row>
          </div>
          <div className="card-body cur-training-body">
            <div className="container">
              <div className="row">
                <p className="text-light">Cource Fee : {course.fee}</p>
              </div>
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                  <table className="table table-secondary table-sm table-striped  cur-training-table">
                    <thead>
                      <tr>
                        <th>Completed Topics</th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.topics.map((topic, index) => {
                        if (topic.status)
                          return (
                            <tr key={index}>
                              <td>{topic.name}</td>
                            </tr>
                          );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                  <table className="table table-secondary table-sm table-striped cur-training-table">
                    <thead>
                      <tr>
                        <th>Remaning Topics</th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.topics.map((topic, index) => {
                        if (!topic.status)
                          return (
                            <tr key={index}>
                              <td>{topic.name}</td>
                            </tr>
                          );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 text-center">
                  <h6 className="text-light">Payment Completed</h6>
                </div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 text-center">
                  <ProgressBar
                    now={parseInt(course.trainerDetails.CompletedPayment, 10)}
                    label={course.trainerDetails.CompletedPayment}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 text-center">
                  <h6 className="text-light">Cource Completed</h6>
                </div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 text-center">
                  <ProgressBar
                    now={parseInt(course.trainerDetails.CourseCompleted, 10)}
                    label={course.trainerDetails.CourseCompleted}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    ) : (
      <Container>
        <div className="card cur-training">
          <div className="card-header badge-info cur-training-header">
            <Row>
              <Col sm={11} md={11} lg={11}>
                <Form.Control
                  type="text"
                  name={course.title}
                  onChange={() => {}}
                  value={course.title}
                  placeholder=""
                />
              </Col>
              <Col sm={1} md={1} lg={1}>
                <Button onClick={event => setEdit(!edit)}>Save</Button>
              </Col>
            </Row>
          </div>
          <div className="card-body cur-training-body">
            <div className="container">
              <div className="row">
                <p className="text-light">Cource Fee : {course.fee}</p>
              </div>
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                  <table className="table table-secondary table-sm table-striped  cur-training-table">
                    <thead>
                      <tr>
                        <th>Completed Topics</th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.topics.map((topic, index) => {
                        if (topic.status)
                          return (
                            <tr key={index}>
                              <td>{topic.name}</td>
                            </tr>
                          );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                  <table className="table table-secondary table-sm table-striped cur-training-table">
                    <thead>
                      <tr>
                        <th colSpan="5">Remaning Topics</th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.topics.map((topic, index) => {
                        if (!topic.status)
                          return (
                            <TableRow
                              key={index}
                              name={topic.name}
                              onchangeHandlerRow={onchangeHandlerRow}
                              _id={topic._id}
                            />
                          );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 text-center">
                  <h6 className="text-light">Payment Completed</h6>
                </div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 text-center">
                  <ProgressBar
                    now={parseInt(course.trainerDetails.CompletedPayment, 10)}
                    label={course.trainerDetails.CompletedPayment}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 text-center">
                  <h6 className="text-light">Cource Completed</h6>
                </div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 text-center">
                  <ProgressBar
                    now={parseInt(course.trainerDetails.CourseCompleted, 10)}
                    label={course.trainerDetails.CourseCompleted}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
    setDisplayCourse(coursDisplay);
  }, []);

  return displayCourse;
};

export default CurrentTrainings;
