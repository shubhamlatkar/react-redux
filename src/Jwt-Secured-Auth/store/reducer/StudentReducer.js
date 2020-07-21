import * as actionTypes from "../Action-Types";

const initState = {
  students: [],
  loading: null
};

const UserReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_STUDENTS: {
      let students = [];
      students = Object.keys(action.students).map(student => {
        return action.students[student];
      });
      return {
        ...state,
        students: students,
        loading: false
      };
    }
    case actionTypes.LOADING:
      return { ...state, loading: true };
    default:
      return;
  }
};

export default UserReducer;
