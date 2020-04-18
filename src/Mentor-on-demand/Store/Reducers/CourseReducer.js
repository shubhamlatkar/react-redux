import * as actionTypes from "../action-types";

export const initState = {
  courses: [],
  isLoading: false
};

const CourseReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_COURSE:
      return { ...state, courses: action.response.cources };

    default:
      return state;
  }
};

export default CourseReducer;
