import * as actionTypes from "./actions";

const initState = {
  counter: 0,
  result: []
};

const reducer = (state = initState, action) => {
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
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: state.counter })
      };
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        result: state.result.filter(data => data.id !== action.id)
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

export default reducer;
