import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Reducers/shoppongCartReducers"
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig={
  key:"root",
  version:1,
  storage
};
const reducer=combineReducers({
  CartReducer:CartReducer

})
const persisitedReducer=persistReducer(persistConfig,reducer)

export const Store=configureStore({
    reducer:persisitedReducer
     
})