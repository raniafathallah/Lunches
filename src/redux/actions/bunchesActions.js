
import { ActionTypes } from "../constants/action-types";

export const SET_BUNCHES = (bunches) => {
  return {
    type: ActionTypes.SET_BUNCHES,
    payload: bunches,
  };
};