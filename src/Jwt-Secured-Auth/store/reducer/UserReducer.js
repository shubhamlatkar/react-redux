import * as actionTypes from "../Action-Types";

const initState = {
  id: null,
  isAuth: false,
  loading: false,
  token: null,
  error: null,
  type: [],
  signup: null,
  username: null
};

const UserReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP:
      return { ...state, ...action.user };
    case actionTypes.LOGIN:
      return { ...state, ...action.user };
    case actionTypes.LOGOUT:
      return { ...initState };
    default:
      return;
  }
};

export default UserReducer;
