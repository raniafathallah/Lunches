import { ActionTypes } from "../constants/action-types";

export const SET_BUNCHES_LATEST = (buncheslatest) => {
  return {
    type: ActionTypes.SET_BUNCHES_LATEST,
    payload: buncheslatest,
  };
};