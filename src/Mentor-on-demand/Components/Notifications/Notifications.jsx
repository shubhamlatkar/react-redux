import React from "react";

import "./Notifications.css";
import { Container } from "react-bootstrap";

const Notifications = props => {
  return (
    <Container>
      <table className="table table-bordered table-light table-striped ">
        <thead className="table-header text-center">
          <tr>
            <th>Notifications</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>You have the payment notification</td>
          </tr>
          <tr>
            <td>You have cource reminder</td>
          </tr>
          <tr>
            <td>You have student missed call!!</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default Notifications;
