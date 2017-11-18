import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './store/configureStore';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import client from './utils/client';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
let preloadedState = {};
if (token && user) {
  preloadedState = {
    auth: {
      isLoggedIn: true,
      user: { name: user },
    },
  };
  // Set authorization header to client
  client.setAuthorizationHeader(`Bearer ${token}`);
}
const store = configureStore(preloadedState, client);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'),
);

registerServiceWorker();
