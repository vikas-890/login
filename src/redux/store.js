import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./index.reducer";
const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
