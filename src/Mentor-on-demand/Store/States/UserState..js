import React, { useReducer, useCallback } from "react";
import axios from "../Axios/baseAxios";
import * as jwt from "jwt-decode";
import * as actionTypes from "../action-types";
import UserContext from "../Contexts/UserContext";
import UserReducer, { initState } from "../Reducers/UserReducer";

const UserState = props => {
  const [userState, dispatch] = useReducer(UserReducer, initState);

  const tryAutoLogin = useCallback(async () => {
    let token = localStorage.getItem("token");
    var decoded = jwt.jwt_decode(token);
    let url = decoded.type ? "mentor/" : "users/";
    token = "Bearer " + token;
    let headers = {
      "Content-Type": "application/json",
      Authorization: token
    };
    axios
      .get(url + "me", { headers: headers })
      .then(res => {
        let user = res.data;
        user.isAuth = true;
        user.loading = false;
        user.type = decoded.type;
        dispatch({ type: actionTypes.LOGIN, user });
      })
      .catch(err => {
        let user = { loading: false, error: "invalid cred", isAuth: false };
        dispatch({ type: actionTypes.LOGIN, user });
      });
  }, []);

  const loginHandler = (email, password, type) => {
    let user = { loading: true, isAuth: false };
    dispatch({ type: actionTypes.LOGIN, user });
    let url = type ? "mentor/" : "users/";
    axios
      .post(url + "login", {
        email: email,
        password: password
      })
      .then(res => {
        let token = res.data;
        localStorage.setItem("token", token);
        token = "Bearer " + token;
        let headers = {
          "Content-Type": "application/json",
          Authorization: token
        };
        return axios.get(url + "me", { headers: headers });
      })
      .then(res => {
        let user = res.data;
        user.isAuth = true;
        user.loading = false;
        user.type = type;
        dispatch({ type: actionTypes.LOGIN, user });
      })
      .catch(err => {
        let user = { loading: false, error: "invalid cred", isAuth: false };
        dispatch({ type: actionTypes.LOGIN, user });
      });
  };

  const signUpHandler = (name, email, password, type) => {
    let url = type ? "mentor/" : "users/";
    axios
      .post(url, {
        name: name,
        email: email,
        password: password
      })
      .then(res => {
        let token = res.data.token;
        localStorage.setItem("token", token);
      })
      .catch(err => console.log("signup err", err));
  };

  const logoutHandler = () => {
    let token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    let url = decoded.type ? "mentor/" : "users/";
    token = "Bearer " + token;
    let headers = {
      "Content-Type": "application/json",
      Authorization: token
    };
    axios
      .get(`${url}logout`, { headers: headers })
      .then(res => {
        localStorage.clear();
        dispatch({ type: actionTypes.LOGOUT, user: {} });
      })
      .catch(err => console.log("Log out err", err));
  };

  let isAuth = false;
  if (userState && userState.isAuth) {
    isAuth = true;
  }

  return (
    <UserContext.Provider
      value={{
        login: loginHandler,
        userState: userState,
        isAuth: isAuth,
        signup: signUpHandler,
        logout: logoutHandler,
        tryAutoLogin: tryAutoLogin
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
