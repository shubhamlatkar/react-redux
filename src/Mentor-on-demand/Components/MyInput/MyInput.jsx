import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const MyInput = props => {
  return (
    <fieldset>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          {props.label}
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type={props.type}
            name={props.name}
            onChange={props.onChangeHandler}
            value={props.value}
            placeholder={props.placeholder}
          />
        </Col>
      </Form.Group>
    </fieldset>
  );
};

export default MyInput;
