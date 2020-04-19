import * as actionTypes from "../action-types";

export const initState = {
  courses: [],
  isLoading: false,
  mentor: {}
};

const CourseReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_COURSE:
      return { ...state, courses: action.response.cources };
    case actionTypes.SET_MENTOR:
      return { ...state, mentor: action.response.mentor };
    default:
      return state;
  }
};

export default CourseReducer;
