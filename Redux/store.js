import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Reducers/shoppongCartReducers"

export const Store=configureStore({
    reducer:{
      CartReducer:CartReducer
    }
})