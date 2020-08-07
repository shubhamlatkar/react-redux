import React from "react";
import ReactDOM from "react-dom";
// import App from "../src/React-hooks/MyApp"; //react-hooks
// import App from "./React-redux-thunk/App"; //react-redux-thunk
// import App from "../src/React-redux-bootstrap/App"; // react-redux-bootstrap
// import App from "../src/Mentor-on-demand/App";
// import App from "../src/Jwt-Secured-Auth/App";
import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
