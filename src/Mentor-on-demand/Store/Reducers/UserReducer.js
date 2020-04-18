import * as actionTypes from "../action-types";

const initState = {
  isAuth: false,
  loading: false,
  userId: null,
  token: null,
  error: null,
  type: null
};

const UserReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, ...action.user };
    case actionTypes.LOGOUT:
      return { ...state, ...action.user };
    default:
      return;
  }
};

export default UserReducer;
