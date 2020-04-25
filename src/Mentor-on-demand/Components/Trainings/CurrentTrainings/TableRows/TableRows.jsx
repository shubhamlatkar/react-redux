import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const TableRow = props => {
  let [edit, setEdit] = useState(false);
  let [title, setTitle] = useState(props.name);
  let rowData = !edit ? (
    <tr>
      <td>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-8 text-center">
            {props.name}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-1   text-center">
            <Button size="sm" onClick={event => setEdit(!edit)}>
              Edit
            </Button>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-1 text-center">
            <Button
              size="sm"
              onClick={event =>
                props.onchangeHandlerRow(props._id, true, props.name)
              }
            >
              Completed
            </Button>
          </div>
        </div>
      </td>
    </tr>
  ) : (
    <tr>
      <td>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 text-center">
            <Form.Control
              type="text"
              name={props.name}
              onChange={event => setTitle(event.target.value)}
              value={title}
              placeholder=""
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 text-center">
            <Button
              size="sm"
              onClick={event => {
                props.onchangeHandlerRow(props._id, false, title);
                setEdit(!edit);
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </td>
    </tr>
  );
  return rowData;
};

export default TableRow;
