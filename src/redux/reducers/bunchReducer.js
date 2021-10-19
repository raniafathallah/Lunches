import { ActionTypes } from "../constants/action-types";
const intialState = {
  bunches: []
};

export const bunchesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BUNCHES:
      return { ...state, bunches: payload };
    default:
      return state;
  }
};

