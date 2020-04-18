import React from "react";
import { Container } from "react-bootstrap";

const CompletedTrainings = props => {
  return (
    <Container>
      <div className="card">
        <div className="card-header badge-info">
          <h4>Cource name </h4>
        </div>
        <div className="card-body bg-dark">
          <div className="container">
            <div className="row">
              <p className="text-light">Cource Fee : 100$</p>
            </div>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                <table className="table table-secondary table-sm table-striped">
                  <thead>
                    <tr>
                      <th>Completed Topics</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Fundamentals</td>
                    </tr>
                    <tr>
                      <td>JDBC</td>
                    </tr>
                    <tr>
                      <td>UI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                <table className="table table-secondary table-sm table-striped">
                  <thead>
                    <tr>
                      <th>Remaning Topics</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Fundamentals</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 text-center">
                <h6 className="text-light">Payment Completed</h6>
              </div>
              <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 text-center">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    75%
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 text-center">
                <h6 className="text-light">Cource Completed</h6>
              </div>
              <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 text-center">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    65%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CompletedTrainings;
