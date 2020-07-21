import React, { useReducer, useCallback } from "react";

import * as actionTypes from "../Action-Types";
import UserReducer, { initState } from "../reducer/UserReducer";
import baseAxios from "../axios/baseAxios";
import UserContext from "../context/UserContext";

const UserState = props => {
  const [userState, dispatch] = useReducer(UserReducer, initState);

  const logout = () => {
    let user = {};
    user.loading = true;
    user.isAuth = false;
    dispatch({ type: actionTypes.SIGNUP, user });
    baseAxios
      .get("/logmeout", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      })
      .then(res => {
        user.loading = false;
        user.isAuth = false;
        dispatch({ type: actionTypes.SIGNUP, user });
      })
      .catch(err => {
        user.isAuth = false;
        user.loading = false;
        dispatch({ type: actionTypes.SIGNUP, user });
      });
    localStorage.removeItem("accessToken");
  };

  const logoutAll = () => {
    let user = {};
    user.loading = true;
    user.isAuth = false;
    dispatch({ type: actionTypes.SIGNUP, user });
    baseAxios
      .get("/logoutall", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      })
      .then(res => {
        user.loading = false;
        user.isAuth = false;
        dispatch({ type: actionTypes.SIGNUP, user });
      })
      .catch(err => {
        user.isAuth = false;
        user.loading = false;
        dispatch({ type: actionTypes.SIGNUP, user });
      });
    localStorage.removeItem("accessToken");
  };

  const signup = signupData => {
    let user = {};
    user.signup = false;
    user.loading = true;
    user.error = false;
    dispatch({ type: actionTypes.SIGNUP, user });

    let obj = {
      username: signupData.name,
      password: signupData.password,
      email: signupData.email,
      roles: signupData.type ? ["ROLE_ADMIN", "ROLE_USER"] : ["ROLE_USER"]
    };

    baseAxios({
      url: "/signup",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: obj
    })
      .then(res => {
        if (res.status == "200") {
          user.signup = true;
          user.loading = false;
          user.error = false;
          dispatch({ type: actionTypes.SIGNUP, user });
        }
      })
      .catch(err => {
        user.signup = false;
        user.loading = false;
        user.error = true;
        dispatch({ type: actionTypes.SIGNUP, user });
      });
  };

  const tryAutoLogin = useCallback(() => {
    let token = localStorage.getItem("accessToken");
    if (token) {
      let user = {};
      user.isAuth = false;
      user.loading = true;
      dispatch({ type: actionTypes.LOGIN, user });
      baseAxios
        .get("/tryAutoLogin", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken")
          }
        })
        .then(res => {
          if (res.status == "200") {
            user.token = res.data.accessToken;
            user.type = res.data.type;
            user.username = res.data.username;
            user.isAuth = true;
            user.loading = false;
            dispatch({ type: actionTypes.LOGIN, user });
          } else {
            localStorage.removeItem("accessToken");
          }
        })
        .catch(err => {
          localStorage.removeItem("accessToken");
          user.isAuth = false;
          user.loading = false;
          dispatch({ type: actionTypes.LOGIN, user });
        });
    }
  }, []);

  const loginHandler = (username, password) => {
    let user = { loading: true, isAuth: false, error: true };
    dispatch({ type: actionTypes.LOGIN, user });
    baseAxios
      .post("/login", { username: username, password: password })
      .then(res => {
        localStorage.setItem("accessToken", res.data.accessToken);
        let user = {};
        user.token = res.data.accessToken;
        user.type = res.data.type;
        user.username = res.data.username;
        user.isAuth = true;
        user.loading = false;
        dispatch({ type: actionTypes.LOGIN, user });
      })
      .catch(err => {
        let user = { loading: false, error: true, isAuth: false };
        dispatch({ type: actionTypes.LOGIN, user });
      });
  };

  return (
    <UserContext.Provider
      value={{
        login: loginHandler,
        userState: userState,
        tryAutoLogin: tryAutoLogin,
        signup: signup,
        logout: logout,
        logoutAll: logoutAll
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
