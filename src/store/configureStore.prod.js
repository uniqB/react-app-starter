import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

const configureStore = (preloadedState) => {
  // Build the middleware for intercepting and dispatching navigation actions
  const reduxRouterMiddleware = routerMiddleware(history);
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, reduxRouterMiddleware),
  );
};

export default configureStore;
