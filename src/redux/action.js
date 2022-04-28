import type from "./constant";
import Mystore from "./Mystore";
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
