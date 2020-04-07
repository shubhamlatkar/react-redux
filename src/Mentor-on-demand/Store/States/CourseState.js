import React, { useReducer } from "react";
import axios from "axios";
import * as actionTypes from "../action-types";
import CourseContext from "../Contexts/CourseContext";
import CourseReducer from "../Reducers/CourseReducer";

const CourseState = props => {
  const [courseState, dispatch] = useReducer(CourseReducer, {});
  const getCourses = id => {
    if (!id) {
      axios
        .get("https://k7heb.sse.codesandbox.io/cources")
        .then(res => {
          console.log("res.data", res.data);
          dispatch({ type: actionTypes.SET_COURSE, courses: res.data.cources });
        })
        .catch(err => console.log("err", err));
    }
    console.log("courseState", courseState);
  };
  return (
    <CourseContext.Provider
      value={{
        courses: courseState,
        getCourses: getCourses
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseState;
