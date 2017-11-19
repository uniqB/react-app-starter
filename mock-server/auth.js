const notAuthRequiredRoutes = [];

function delaySend(res, data, status = 200) {
  res.status(status);
  return setTimeout(() => res.send(data), 1000);
}

module.exports = (req, res, next) => {
  if (notAuthRequiredRoutes.indexOf(req.url) !== -1) {
    return next();
  }
  if (req.url === '/login') {
    const { user, pass } = req.body;
    if (user && user === pass) {
      return delaySend(res, { token: 'fakedToken' });
    }
    return delaySend(res, { errorMessage: 'User and password are invalid.' }, 400);
  }
  const token = req.headers.authorization;
  if (token) {
    res.header('X-Authorization', token);
    return setTimeout(() => next(), 1000);
  }
  return delaySend(res, { errorMessage: 'You must to login to access this resource.' }, 401);
};

