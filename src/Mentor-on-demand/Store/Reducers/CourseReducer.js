import * as actionTypes from "../action-types";

export const initState = {
  courses: [],
  coursesLength: 0,
  isLoading: false,
  myCourses: []
};

const CourseReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_COURSE:
      return {
        ...state,
        courses: action.response.cources,
        coursesLength: action.response.coursesLength
      };
    case actionTypes.SET_MY_COURSES:
      return { ...state, myCourses: action.response };
    default:
      return state;
  }
};

export default CourseReducer;
