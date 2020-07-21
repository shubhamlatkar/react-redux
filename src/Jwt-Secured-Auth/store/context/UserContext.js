import React from "react";

const UserContext = React.createContext({
  userState: {},
  login: () => {},
  tryAutoLogin: () => {},
  signup: user => {},
  logout: () => {},
  logoutAll: () => {}
});

export default UserContext;
