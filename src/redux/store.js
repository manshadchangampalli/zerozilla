import { combineReducers, createStore } from "redux";
import { cartReducer, cartItems } from "./reducer";

const store = createStore(
  combineReducers({ cartReducer: cartReducer, cartItems: cartItems })
);

export default store;
