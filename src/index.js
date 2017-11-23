import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from 'routes/App';
import client from 'utils/client';
import configureStore, { history } from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

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
