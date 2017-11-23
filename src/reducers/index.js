import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import post from './post';
import message from './message';

const rootReducer = combineReducers({
  router: routerReducer,
  auth,
  post,
  message,
});

export default rootReducer;
