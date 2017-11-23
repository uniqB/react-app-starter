export default client => ({ dispatch, getState }) => next => (action) => {
  // Thunk
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  // Promise
  if (action.promise) {
    const { promise, type, ...rest } = action;

    if (type instanceof Array) {
      const [BEGIN, SUCCESS, FAILURE] = type;
      // Dispatch begin async request action
      next({ type: BEGIN, ...rest });
      return promise(client, dispatch, getState).then((response) => {
        // Dispatch async request success action
        next({ type: SUCCESS, payload: response.data });
      }).catch((error) => {
        // Dispatch async request failure action
        const err = (error.response && error.response.data) || error.message;
        next({ type: FAILURE, payload: err });
        // show failure message
        next({
          type: 'SET_TOAST_MSG',
          payload: {
            type: 'error',
            content: {
              title: 'Error',
              content: JSON.stringify(err),
            },
          },
        });
      });
    }
    // Action manually handle success/failure async request result
    next({ type, ...rest });
    return promise(client, dispatch, getState);
  }
  // Normal
  return next(action);
};
