import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import { bunchesReducer } from "./bunchReducer";
import { bunchesReducerlatest } from "./bunchReducerLatest";
import { bunchesReducerComing } from "./bunchReducerComing";
const reducers = combineReducers({
  allbuches:bunchesReducer,
  allbunlatest:bunchesReducerlatest,
  allbunchescoming:bunchesReducerComing,
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;
