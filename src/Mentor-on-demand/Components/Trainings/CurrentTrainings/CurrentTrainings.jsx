import React, { useState, useEffect, useCallback, useContext } from "react";
import {
  Container,
  ProgressBar,
  Row,
  Col,
  Button,
  Form
} from "react-bootstrap";
import TableRow from "./TableRows/TableRows";
import CourseContext from "../../../Store/Contexts/CourseContext";

const CurrentTrainings = props => {
  let [edit, setEdit] = useState(false);
  let [displayCourse, setDisplayCourse] = useState(<React.Fragment />);
  let [course, setCourse] = useState(
    props.course.courseData
      ? { ...props.course.courseData }
      : { ...props.course }
  );

  const { patchCourse } = useContext(CourseContext);

  const onchangeHandlerRow = useCallback(
    (_id, type, title) => {
      let temCourse = { ...course };
      temCourse.topics.forEach(topic => {
        if (topic._id === _id && type) topic.status = !topic.status;
        if (topic._id === _id && !type) topic.name = title;
      });
      setCourse(temCourse);
    },
    [course]
  );

  const onCourseSubmithandler = useCallback(
    event => {
      patchCourse(course);
    },
    [course, patchCourse]
  );

  useEffect(() => {
    let coursDisplay = !edit ? (
      <Container>
        <div className="card cur-training">
          <div className="card-header badge-info cur-training-header">
            <Row>
              <Col sm={10} md={10} lg={10}>
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
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-left">
                  <h6 className="text-light">Payment Completed</h6>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left">
                  <ProgressBar
                    now={parseInt(course.trainerDetails.CompletedPayment, 10)}
                    label={course.trainerDetails.CompletedPayment}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-left">
                  <h6 className="text-light">Cource Completed</h6>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left">
                  <ProgressBar
                    now={parseInt(course.trainerDetails.CourseCompleted, 10)}
                    label={course.trainerDetails.CourseCompleted}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-left">
                  <h6 className="text-light">Cource Levels</h6>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left">
                  <h6 className="text-light">{course.levels}</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-left">
                  <h6 className="text-light">Cource Durations</h6>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left">
                  <h6 className="text-light">{course.duration}</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-left">
                  <h6 className="text-light">Cource Lectures</h6>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left">
                  <h6 className="text-light">{course.lectures}</h6>
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
              <Col sm={9} md={12} lg={12}>
                <Form.Control
                  type="text"
                  name={course.title}
                  onChange={() => {}}
                  value={course.title}
                  placeholder=""
                />
              </Col>
              <Col sm={1} md={12} lg={12} className="my-1">
                <Button onClick={onCourseSubmithandler}>Save</Button>
              </Col>
              <Col sm={1} md={12} lg={12} className="my-1">
                <Button onClick={event => setEdit(!edit)}>Cancel</Button>
              </Col>
            </Row>
          </div>
          <div className="card-body cur-training-body">
            <div className="container">
              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 text-left">
                  <h6 className="text-light">Cource Fee :</h6>
                </div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 text-left">
                  <Form.Control
                    type="text"
                    name={course.title}
                    onChange={() => {}}
                    value={course.fee}
                    placeholder=""
                  />
                </div>
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
                        <th colSpan="1">Remaning Topics</th>
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
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                  <h6 className="text-light">Payment Completed</h6>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-center">
                  <ProgressBar
                    now={parseInt(course.trainerDetails.CompletedPayment, -8)}
                    label={course.trainerDetails.CompletedPayment}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                  <h6 className="text-light">Cource Completed</h6>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-center">
                  <ProgressBar
                    now={parseInt(course.trainerDetails.CourseCompleted, 10)}
                    label={course.trainerDetails.CourseCompleted}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-left">
                  <h6 className="text-light">Cource Levels</h6>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left">
                  <Form.Control
                    type="text"
                    name={course.title}
                    onChange={() => {}}
                    value={course.levels}
                    placeholder=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-left">
                  <h6 className="text-light">Cource Durations</h6>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left">
                  <Form.Control
                    type="text"
                    name={course.title}
                    onChange={() => {}}
                    value={course.duration}
                    placeholder=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-left">
                  <h6 className="text-light">Cource Lectures</h6>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left">
                  <Form.Control
                    type="text"
                    name={course.title}
                    onChange={() => {}}
                    value={course.lectures}
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
    setDisplayCourse(coursDisplay);
  }, [course, edit]);

  return displayCourse;
};

export default CurrentTrainings;
