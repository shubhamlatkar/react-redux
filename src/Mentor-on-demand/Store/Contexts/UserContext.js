import React from "react";

const UserContext = React.createContext({
  isAuth: false,
  userState: {},
  login: () => {},
  signup: () => {},
  logout: () => {}
});

export default UserContext;
