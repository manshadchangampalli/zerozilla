import { combineReducers, createStore } from "redux";
import { cartReducer, cartItems, navItems } from "./reducer";

const store = createStore(
  combineReducers({ 
    cartReducer: cartReducer, 
    cartItems: cartItems ,
    navItems:navItems
  })
);

export default store;
