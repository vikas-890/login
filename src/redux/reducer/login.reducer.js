import { LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS } from "../constant.js";
const initState = {
  userName: "",
  isLoggedIn: "",
  error: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      state = {
        ...state,
        userName: action.payload.userName,
        isLoggedIn: false,
        error: "",
      };
      break;
    case SIGNUP_SUCCESS:
      state = {
        ...state,

        userName: action.payload.userName,
        isLoggedIn: true,
        error: "",
      };
      break;
    case SIGNUP_FAIL:
      state = {
        ...state,
        userName: "",
        isLoggedIn: false,
        error: "some error occured",
      };
  }

  return state;
};
