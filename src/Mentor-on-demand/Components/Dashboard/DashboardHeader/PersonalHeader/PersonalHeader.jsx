import React from "react";
import { Navbar, Button, ButtonGroup } from "react-bootstrap";
import styles from "../DashboardHeader.module.css";

const PersonalHeader = props => {
  return (
    <React.Fragment>
      <Navbar bg="primary" variant="dark" className={styles.Padding}>
        <Navbar.Brand className="mr-auto" href="#home">
          Navbar
        </Navbar.Brand>
        {/* <ButtonGroup varient="dark" className="mb-2">
          <Button bg="dark">Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup> */}

        <ButtonGroup size="sm">
          <Button variant="dark">Notifications</Button>
          <Button variant="dark">Current Trainings</Button>
          <Button variant="dark">Completed Trainnings</Button>
          <Button variant="dark">Payments</Button>
        </ButtonGroup>
      </Navbar>
    </React.Fragment>
  );
};

export default PersonalHeader;
