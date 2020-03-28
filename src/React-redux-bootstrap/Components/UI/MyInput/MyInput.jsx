import React from "react";
import { Form, InputGroup } from "react-bootstrap";

import styles from "./MyInput.module.css";

const MyInput = props => {
  const inputClasses = [styles.InputELement];
  return (
    <div className={styles.MyInput}>
      <Form.Group controlId={props.name}>
        <Form.Label htmlFor={props.name}>{props.label}</Form.Label>
        <InputGroup>
          {props.label === "Balance" ? (
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
          ) : null}
          <Form.Control
            id={props.name}
            className={inputClasses.join(" ")}
            value={props.value}
            onChange={props.changed}
            type={props.type}
          />
        </InputGroup>
        {props.caption === "" && !props.touched ? (
          <Form.Text className="text-muted">
            Enter your {props.label}.
          </Form.Text>
        ) : (
          <Form.Text className={props.valid ? "text-success" : "text-danger"}>
            {props.caption}
          </Form.Text>
        )}
      </Form.Group>
    </div>
  );
};

export default MyInput;
