import React from "react";

const UserContext = React.createContext({
  isAuth: false,
  userState: {},
  login: () => {},
  signup: () => {},
  logout: () => {},
  getNotifications: () => {}
});

export default UserContext;
