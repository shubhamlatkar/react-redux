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
    dispatch(actionCreators.loadingCourses());
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

  const getCourses = useCallback((skip, limit, filterBy) => {
    let url = "";
    if (filterBy) url = `/cources?filterBy=${filterBy}`;
    else url = `/cources?skip=${skip}&limit=${limit}`;
    dispatch(actionCreators.loadingCourses());
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

  const patchCourse = useCallback(
    course => {
      delete course.createdAt;
      delete course.updatedAt;
      delete course.reviews;
      delete course.__v;
      let token = localStorage.getItem("token");
      token = "Bearer " + token;
      let headers = {
        "Content-Type": "application/json",
        Authorization: token
      };
      axios
        .patch("/cources/" + course._id, { ...course }, { headers: headers })
        .then(res => {
          getMyCourses();
        })
        .catch(err => console.log("err", err));
    },
    [getMyCourses]
  );

  return (
    <CourseContext.Provider
      value={{
        courses: courseState.courses,
        getCourses: getCourses,
        addCourse: addCourse,
        enrollCourse: enrollCourse,
        getMyCourses: getMyCourses,
        courseState: courseState,
        patchCourse: patchCourse
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseState;
