const notAuthRequiredRoutes = [];
module.exports = (req, res, next) => {
  if (notAuthRequiredRoutes.indexOf(req.url) !== -1) {
    return next();
  }
  if (req.url === '/login') {
    const { user, pass } = req.body;
    if (user && user === pass) {
      return res.send({ token: 'fakedToken' });
    }
    res.status(400);
    return setTimeout(() => res.send({ errorMessage: 'User and password are invalid.' }), 1000);
  }
  const token = req.header.Authorization;
  if (req.header.Authorization) {
    res.header('X-Authorization', token);
    next();
  } else {
    res.sendStatus(401);
  }
};

