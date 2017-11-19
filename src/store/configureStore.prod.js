import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';
import clientMiddleware from './clientMiddleware';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

const configureStore = (preloadedState, client) => {
  // Build the middleware for intercepting and dispatching navigation actions
  const reduxRouterMiddleware = routerMiddleware(history);
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(clientMiddleware(client), reduxRouterMiddleware),
  );
};

export default configureStore;
