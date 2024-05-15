const jwt = require('jsonwebtoken');
const config = require('../config');

const authMiddleware = (requiredRoles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, config.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);

      req.user = user;

      if (requiredRoles.length && !requiredRoles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Forbidden' });
      }

      next();
    });
  };
};

module.exports = authMiddleware;
