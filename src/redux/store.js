import { combineReducers, createStore } from "redux";
import { cartReducer, cartItems, navItems, searchItem } from "./reducer";

const store = createStore(
  combineReducers({ 
    cartReducer: cartReducer, 
    cartItems: cartItems ,
    navItems:navItems,
    searchItem:searchItem
  })
);

export default store;
