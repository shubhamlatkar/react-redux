import React, { useReducer } from "react";
import axios from "axios";
import * as actionTypes from "../action-types";
import UserContext from "../Contexts/UserContext";
import UserReducer from "../Reducers/UserReducer";

const UserState = props => {
  const [userState, dispatch] = useReducer(UserReducer, {});

  let url = "https://k7heb.sse.codesandbox.io/";
  const loginHandler = async (email, password, type) => {
    type = type ? "mentor/" : "users/";
    url = url + type;
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
        console.log(res);
        let user = res.data;
        user.isAuth = true;
        dispatch({ type: actionTypes.LOGIN, user });
      })
      .catch(err => console.log("login err", err));
  };

  const signUpHandler = (name, email, password, type) => {
    type = type ? "mentor/" : "users/";
    url = url + type;
    console.log("signup", url);
    axios
      .post(url, {
        name: name,
        email: email,
        password: password
      })
      .then(res => {
        let token = res.data.token;
        localStorage.setItem("token", token);
        console.log("signup res", res.data);
      })
      .catch(err => console.log("signup err", err));
  };

  const logoutHandler = () => {
    dispatch({ type: actionTypes.LOGOUT, user: {} });
  };

  return (
    <UserContext.Provider
      value={{
        login: loginHandler,
        userState: userState,
        isAuth: userState && userState.isAuth,
        signup: signUpHandler,
        logout: logoutHandler
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
