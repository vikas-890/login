import { SIGNUP_SUCCESS, SIGNUP_FAIL, SIGNUP_START } from "../constant.js";
const initState = {
  isLoggedIn: "",
  error: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      state = {
        ...state,

        isLoggedIn: false,
        error: "",
      };
      break;
    case SIGNUP_SUCCESS:
      state = {
        ...state,

        isLoggedIn: true,
        error: "",
      };
      break;
    case SIGNUP_FAIL:
      state = {
        ...state,

        isLoggedIn: false,
        error: action.payload.error,
      };
  }

  return state;
};
