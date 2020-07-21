import React, { useReducer, useCallback } from "react";

import * as actionTypes from "../Action-Types";
import StudentReducer, { initState } from "../reducer/StudentReducer";
import baseAxios from "../axios/baseAxios";
import StudentContext from "../context/StudentContext";

const StudentState = props => {
  const [studentState, dispatch] = useReducer(StudentReducer, initState);

  const putUser = user => {
    baseAxios({
      method: "PUT",
      url: "/api/student/" + user.id,
      data: user,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken")
      }
    })
      .then(res => {})
      .catch(err => console.log("err", err));
  };

  const getStudents = useCallback(() => {
    dispatch({ type: actionTypes.LOADING });
    baseAxios
      .get("/api/student/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      })
      .then(res => {
        dispatch({ type: actionTypes.SET_STUDENTS, students: { ...res.data } });
      })
      .catch(err => console.log("err", err));
  }, []);

  return (
    <StudentContext.Provider
      value={{
        studentState: studentState,
        getStudents: getStudents,
        putUser: putUser
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
