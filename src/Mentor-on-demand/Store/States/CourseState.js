import React, { useReducer, useCallback } from "react";
import axios from "../Axios/baseAxios";
import * as actionCreators from "../actionCreators";
import CourseContext from "../Contexts/CourseContext";
import CourseReducer, { initState } from "../Reducers/CourseReducer";

const CourseState = props => {
  const [courseState, dispatch] = useReducer(CourseReducer, initState);
  const getCourses = useCallback(id => {
    if (!id) {
      axios
        .get("/cources")
        .then(res => {
          dispatch(actionCreators.success(res.data));
        })
        .catch(err => console.log("err", err));
    }
  }, []);

  return (
    <CourseContext.Provider
      value={{
        courses: courseState.courses,
        getCourses: getCourses
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseState;
