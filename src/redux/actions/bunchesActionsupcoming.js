import { ActionTypes } from "../constants/action-types";

export const SET_BUNCHES_COMING = (bunchescoming) => {
  return {  
    type: ActionTypes.SET_BUNCHES_COMING,
    payload: bunchescoming,
  };
};