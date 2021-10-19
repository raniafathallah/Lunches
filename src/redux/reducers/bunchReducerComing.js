import { ActionTypes } from "../constants/action-types";
const intialState = {
  bunchescoming: []
};
export const bunchesReducerComing = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BUNCHES_COMING:   
      return { ...state, bunchescoming: payload };
    default:
      return state;
  }
};