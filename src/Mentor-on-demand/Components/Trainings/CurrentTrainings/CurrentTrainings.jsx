import React from "react";
import { Container, ProgressBar } from "react-bootstrap";

const CurrentTrainings = props => {
  let course = props.course.courseData ? props.course.courseData : props.course;
  return (
    <Container>
      <div className="card cur-training">
        <div className="card-header badge-info cur-training-header">
          <h4>{course.title}</h4>
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
  );
};

export default CurrentTrainings;
