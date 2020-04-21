import React from "react";
import { Container } from "react-bootstrap";

const CompletedTrainings = props => {
  return (
    <Container>
      <table className="table table-bordered table-light table-striped cur-training-table">
        <thead className="text-center card-header">
          <tr>
            <th>Cources</th>
            <th>Payment Status</th>
            <th>Reciept</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Java</td>
            <td>Completed 100%</td>
            <td className="text-center">
              <button className="btn btn-sm">View</button>
            </td>
          </tr>
          <tr>
            <td>Python</td>
            <td>Completed 100%</td>
            <td className="text-center">
              <button className="btn btn-sm">View</button>
            </td>
          </tr>
          <tr>
            <td>Cloud</td>
            <td>Completed 100%</td>
            <td className="text-center">
              <button className="btn  btn-sm">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default CompletedTrainings;
