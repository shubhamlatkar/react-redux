import * as actionTypes from "../action-types";

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
