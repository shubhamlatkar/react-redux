import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import MyInput from "../MyInput/MyInput";

const TrainerForm = props => {
  let form = Object.keys(mentor).map(key => (
    <MyInput
      key={mentor[key].name}
      onChangeHandler={onChangeHandler}
      label={mentor[key].label}
      title={mentor[key].title}
      placeholder={mentor[key].placeholder}
      name={mentor[key].name}
      value={mentor[key].value}
    />
  ));
  const onChangeHandler = event => {};
  return (
    <Container className="text-left form-container">
      <Form>
        {form}
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" className="form-container-btn">
              Sign Up
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default withRouter(TrainerForm);
