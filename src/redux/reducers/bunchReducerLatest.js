import { ActionTypes } from "../constants/action-types";
const intialState = {
  buncheslatest: []
};

export const bunchesReducerlatest = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BUNCHES_LATEST:   
      return { ...state, buncheslatest: payload };
    default:
      return state;
  }
};