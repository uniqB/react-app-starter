import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import post from './post';

const rootReducer = combineReducers({
  router: routerReducer,
  auth,
  post,
});

export default rootReducer;
