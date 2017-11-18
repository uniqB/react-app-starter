export default client => ({ dispatch, getState }) => next => (action) => {
  // Thunk
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  // Promise
  if (action.promise) {
    const { promise, type, ...rest } = action;
    if (type) {
      next({ type, ...rest });
    }
    return promise(client, dispatch, getState);
  }
  // Normal
  return next(action);
};
