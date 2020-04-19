import React, { useReducer, useCallback, useContext } from "react";
import axios from "../Axios/baseAxios";
import * as actionCreators from "../actionCreators";
import CourseContext from "../Contexts/CourseContext";
import CourseReducer, { initState } from "../Reducers/CourseReducer";
import UserContext from "../Contexts/UserContext";

const CourseState = props => {
  const [courseState, dispatch] = useReducer(CourseReducer, initState);
  const userContext = useContext(UserContext);
  let { userState } = userContext;
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

  const getMentor = useCallback(id => {
    if (id) {
      axios
        .get("/mentor/" + id)
        .then(res => {
          let mentor = { ...res.data };
          dispatch(actionCreators.successMentor(mentor));
        })
        .catch(err => console.log("mentor err", err));
    }
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
        getMentor: getMentor,
        mentor: courseState.mentor,
        addCourse: addCourse
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseState;
