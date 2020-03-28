import * as actionTypes from "./actions";

export const increment = val => {
  return {
    type: actionTypes.INCREMENT,
    val: val
  };
};

export const decrement = val => {
  return {
    type: actionTypes.DECREMENT,
    val: val
  };
};
