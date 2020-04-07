import * as actionTypes from "../action-types";

const CourseReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_COURSE:
      return { ...action.courses };

    default:
      return state;
  }
};

export default CourseReducer;
