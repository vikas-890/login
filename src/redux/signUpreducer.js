import type from "./constant";
const initState = {
  authenticated: false,
  authenticating: true,
  error: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case type.SIGNUP_START:
      state = {
        ...state,
        authenticating: true,
        error: "",
      };
      break;
    case type.SIGNUP_SUCCESS:
      state = {
        ...state,

        authenticated: true,
        authenticating: false,
        error: "",
      };
      break;
    case type.SIGNUP_FAIL:
      state = {
        ...state,
        authenticated: false,
        authenticating: false,
        error: action.payload.error,
      };

    case type.LOGIN_START:
      state = {
        ...state,
        authenticating: true,
        authenticated: false,
        error: "",
      };
      break;
    case type.LOGIN_SUCCESS:
      state = {
        ...state,

        authenticated: true,
        authenticating: false,
        error: "",
      };
      break;
    case type.LOGIN_FAIL:
      state = {
        ...state,
        authenticated: false,
        authenticating: false,
        error: action.payload.error,
      };
  }

  return state;
};
