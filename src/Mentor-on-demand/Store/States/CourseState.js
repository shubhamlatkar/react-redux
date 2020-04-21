import React, { useReducer, useCallback } from "react";
import axios from "../Axios/baseAxios";
import * as actionCreators from "../actionCreators";
import CourseContext from "../Contexts/CourseContext";
import CourseReducer, { initState } from "../Reducers/CourseReducer";

const CourseState = props => {
  const [courseState, dispatch] = useReducer(CourseReducer, initState);

  const getMyCourses = useCallback(() => {
    let token = localStorage.getItem("token");
    token = "Bearer " + token;
    let headers = {
      "Content-Type": "application/json",
      Authorization: token
    };
    axios
      .get("cources/me", { headers: headers })
      .then(res => {
        dispatch(actionCreators.successGetMyCourses(res.data));
      })
      .catch(err => console.log("getMy Courses err", err));
  }, []);

  const enrollCourse = useCallback(_id => {
    let token = localStorage.getItem("token");
    token = "Bearer " + token;
    let headers = {
      "Content-Type": "application/json",
      Authorization: token
    };
    axios
      .put(`cources/me/${_id}`, {}, { headers: headers })
      .then(res => console.log("course put success", res))
      .catch(err => console.log("course put err", err));
  }, []);

  const getCourses = useCallback((skip, limit) => {
    let url = `/cources?skip=${skip}&limit=${limit}`;
    axios
      .get(url)
      .then(res => {
        dispatch(actionCreators.success(res.data));
      })
      .catch(err => console.log("err", err));
  }, []);

  const addCourse = course => {
    if (course) {
      let token = localStorage.getItem("token");
      token = "Bearer " + token;
      let headers = {
        "Content-Type": "application/json",
        Authorization: token
      };
      axios
        .post("cources/me", course, { headers: headers })
        .then(res => console.log("add course", res))
        .catch(err => console.log("add course err", err));
    }
  };

  return (
    <CourseContext.Provider
      value={{
        courses: courseState.courses,
        getCourses: getCourses,
        addCourse: addCourse,
        enrollCourse: enrollCourse,
        getMyCourses: getMyCourses,
        courseState: courseState
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseState;
