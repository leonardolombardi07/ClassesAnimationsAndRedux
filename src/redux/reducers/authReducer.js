import {
  LOG_OUT,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
} from "../actions/types";

const initialState = {
  firstAccess: true,
  loadingToken: true,
  loadingLogin: false,
  token: null,
  loginErrorMessage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        loadingToken: false,
        loadingLogin: true,
        loginErrorMessage: null,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        firstAccess: false,
        loadingToken: false,
        loadingLogin: false,
        token: action.payload,
        loginErrorMessage: null,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        firstAccess: action.payload.firstAccess,
        loadingToken: false,
        loadingLogin: false,
        token: null,
        loginErrorMessage: action.payload.errorMessage,
      };
    case LOG_OUT:
      return {
        ...state,
        loadingToken: false,
        loadingLogin: false,
        token: false,
        loginErrorMessage: null,
      };
    default:
      return state;
  }
};
