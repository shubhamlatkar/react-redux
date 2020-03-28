import * as actionTypes from "./actions";

const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    value: res
  };
};

export const storeResult = value => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(value));
    }, 5000);
  };
};

export const deleteResult = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: id
  };
};

export const resetResult = () => {
  return {
    type: actionTypes.RESET
  };
};
