import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './app';
import auth from './auth';

const rootReducer = combineReducers({
  router: routerReducer,
  app,
  auth,
});

export default rootReducer;
