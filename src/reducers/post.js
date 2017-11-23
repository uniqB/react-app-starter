import { FETCH_POST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from 'actions/post';

const INITIAL_STATE = {
  listPosts: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_POST_SUCCESS:
      return {
        listPosts: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      break;
  }
  return state;
};
