import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const clearProduct = () => {
  return {
    type: ActionTypes.CLEAR_PRODUCT,
    payload: [],
  };
};
export const setProducts1 = (products1) => {
  return {
    type: ActionTypes.SET_PRODUCTS1,
    payload: products1,
  };
};
export const setProducts2 = (products2) => {
  return {
    type: ActionTypes.SET_PRODUCTS2,
    payload: products2,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };

};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};