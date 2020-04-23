import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const TableRow = props => {
  let [edit, setEdit] = useState(false);

  let rowData = !edit ? (
    <tr>
      <td>{props.name}</td>
      <Button size="sm" onClick={event => setEdit(!edit)}>
        Edit
      </Button>
      <td />
      <Button
        size="sm"
        onClick={event => props.onchangeHandlerRow(props._id, true, props.name)}
      >
        Completed
      </Button>
      <td />
    </tr>
  ) : (
    <tr>
      <td colSpan="3">
        <Form.Control
          type="text"
          name={props.name}
          onChange={() => {}}
          value={props.name}
          placeholder=""
        />
      </td>
      <Button size="sm" onClick={event => setEdit(!edit)}>
        Edit
      </Button>
      <td />
    </tr>
  );
  return rowData;
};

export default TableRow;
