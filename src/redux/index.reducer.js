import { combineReducers } from "redux";
import signupReducer from "../redux/reducer/signup.reducer";
import loginReducer from "../redux/reducer/login.reducer";

const rootReducer = combineReducers({
  sign: signupReducer,
  login: loginReducer,
});

export default rootReducer;
