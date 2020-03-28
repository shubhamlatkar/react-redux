import React from "react";
import Radium from "radium";

const Validation = props => {
  const divStyle = {
    display: "inline-block",
    padding: "2%",
    margin: "2%",
    border: "1px solid black",
    textAlign: "center",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "lightblue",
      color: "black"
    }
  };
  return (
    <React.Fragment>
      <div style={divStyle} onClick={props.clicked}>
        <h2 style={{ display: "block" }}>{props.string}</h2>
      </div>
    </React.Fragment>
  );
};

export default Radium(Validation);
