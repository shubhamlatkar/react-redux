import * as actionTypes from "../actions";

const initState = {
  counter: 0
};

const resultReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + action.val
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - action.val
      };
    case actionTypes.RESET:
      return {
        ...state,
        counter: 0
      };
    default:
      return state;
  }
};

export default resultReducer;
