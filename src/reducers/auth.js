import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/auth';

const INITIAL_STATE = {
  isLoggedIn: false,
  user: {},
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...INITIAL_STATE,
        user: { name: action.payload.user },
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      break;
  }
  return state;
};
