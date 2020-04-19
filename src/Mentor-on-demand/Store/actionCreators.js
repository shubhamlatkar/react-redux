import * as actionTypes from "./action-types";

export const success = response => ({ type: actionTypes.SET_COURSE, response });
export const successMentor = response => ({
  type: actionTypes.SET_MENTOR,
  response
});
