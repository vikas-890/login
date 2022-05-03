import type from "./constant";
import { Mystore } from "./Mystore";
import { MystoreLogin } from "./Mystore";
export const signUp = (user) => {
  return (dispatch) => {
    dispatch({ type: type.SIGNUP_START });
    const result = Mystore(user);
    if (result == -1) {
      dispatch({ type: type.SIGNUP_FAIL, payload: { error: "userExists" } });
    } else {
      dispatch({ type: type.SIGNUP_SUCCESS });
    }
  };
};

export const login = (user) => {
  return (dispatch) => {
    dispatch({ type: type.LOGIN_START });
    const result = MystoreLogin(user);
    if (result == -1) {
      dispatch({
        type: type.LOGIN_FAIL,
        payload: { error: "Password or user correct" },
      });
    } else {
      dispatch({ type: type.LOGIN_SUCCESS });
    }
  };
};
