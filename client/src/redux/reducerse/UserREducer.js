import {
  REGISTRE,
  REGISTRE_SUCCESS,
  REGISTRE_FAIL,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GETPROF,
  GETPROF_SUCCESS,
  GETPROF_FAIL,
  LOG_OUT,
} from "../actionType";

const initialState = {
  loading: false,
  user: null,
  errors: null,
  token: null,
  isAuth: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTRE:
      return { ...state, loading: true };
    case REGISTRE_SUCCESS:
      return { ...state, loading: false, user: payload };
    case REGISTRE_FAIL:
      return { ...state, loading: false, errors: payload };
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
        token: payload.token,
        errors: null,
      };
    case LOGIN_FAIL:
      return { ...state, loading: false, errors: payload };
    case GETPROF:
      return { ...state, loading: true };
    case GETPROF_SUCCESS:
      return { ...state, loading: false, user: payload, isAuth: true };
    case GETPROF_FAIL:
      return { ...state, loading: false, errors: payload };
    case LOG_OUT:
      return { ...state, loading: false, user: null, isAuth: false };

    default:
      return state;
  }
};
export default reducer;
