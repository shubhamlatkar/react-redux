import * as actionTypes from "../actions/actions";

const initState = {
  result: []
};

const resultReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: action.value })
      };
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        result: state.result.filter(data => data.id !== action.id)
      };
    default:
      return state;
  }
};

export default resultReducer;
