export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
}

export function login(data) {
  return {
    type: LOGIN,
    payload: data,
    promise(client, dispatch) {
      return client.post('/login', data).then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', data.user);
        // Set authorization header to client
        client.setAuthorizationHeader(`Bearer ${response.data.token}`);
        dispatch(loginSuccess(response.data));
      }).catch((error) => {
        const err = error.response ? error.response.data : error.message;
        dispatch(loginFailure(err));
      });
    },
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({ type: LOGOUT });
  };
}
