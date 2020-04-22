import React, { useReducer, useCallback } from "react";
import axios from "../Axios/baseAxios";
import * as actionTypes from "../action-types";
import UserContext from "../Contexts/UserContext";
import UserReducer, { initState } from "../Reducers/UserReducer";

const UserState = props => {
  const [userState, dispatch] = useReducer(UserReducer, initState);

  const tryAutoLogin = useCallback(async () => {
    let token = localStorage.getItem("token");
    if (token) {
      token = "Bearer " + token;
      let headers = {
        "Content-Type": "application/json",
        Authorization: token
      };
      axios
        .get("users/me", { headers: headers })
        .then(res => {
          let user = res.data;
          user.isAuth = true;
          user.loading = false;
          user.type = res.data.myUser.type;
          dispatch({ type: actionTypes.LOGIN, user });
        })
        .catch(err => {
          let user = { loading: false, error: "invalid cred", isAuth: false };
          dispatch({ type: actionTypes.LOGIN, user });
        });
    }
  }, []);

  const loginHandler = (email, password) => {
    let user = { loading: true, isAuth: false };
    dispatch({ type: actionTypes.LOGIN, user });
    axios
      .post("users/login", {
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
        return axios.get("users/me", { headers: headers });
      })
      .then(res => {
        let user = res.data;
        user.isAuth = true;
        user.loading = false;
        user.type = res.data.myUser.type;
        dispatch({ type: actionTypes.LOGIN, user });
      })
      .catch(err => {
        let user = { loading: false, error: "invalid cred", isAuth: false };
        dispatch({ type: actionTypes.LOGIN, user });
      });
  };

  const signUpHandler = user => {
    let temUser = { loading: true, isAuth: false };
    dispatch({ type: actionTypes.LOGIN, temUser });
    axios
      .post("users/", {
        ...user
      })
      .then(res => {
        let token = res.data.token;
        localStorage.setItem("token", token);
        let user = res.data.res;
        user.isAuth = true;
        user.loading = false;
        user.type = res.data.res.type;
        dispatch({ type: actionTypes.LOGIN, user });
      })
      .catch(err => console.log("signup err", err));
  };

  const logoutHandler = () => {
    let token = localStorage.getItem("token");
    token = "Bearer " + token;
    let headers = {
      "Content-Type": "application/json",
      Authorization: token
    };
    axios
      .get("users/logout", { headers: headers })
      .then(res => {
        localStorage.clear();
        dispatch({ type: actionTypes.LOGOUT });
      })
      .catch(err => console.log("Log out err", err));
  };

  const updateUser = useCallback(user => {
    let token = localStorage.getItem("token");
    token = "Bearer " + token;
    let headers = {
      "Content-Type": "application/json",
      Authorization: token
    };
    axios
      .patch("/users/me", { ...user }, { headers: headers })
      .then(res => console.log("res user patch", res))
      .catch(err => console.log("user pathch err", err));
  }, []);

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
        tryAutoLogin: tryAutoLogin,
        updateUser: updateUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
