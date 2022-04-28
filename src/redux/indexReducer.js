import { combineReducers } from "redux";
import authReducer from "./signUpreducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
