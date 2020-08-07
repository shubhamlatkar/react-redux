import React from "react";
import { Spinner } from "react-bootstrap";
import "./styles.css";

export default loader = () => {
  return (
    <div className="loader">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};
