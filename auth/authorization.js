require('dotenv').config();
const jwt = require('jsonwebtoken');
const errorTemplate = require('../templates/errorTemplate');
const messages = require('../messages/messages');

module.exports = (req, res, next) => {
  try {
    // 'Bearer: nfefifwmerpjf0934qmpfsmlsfmvwmerpvnwp'
    const [, token] = req.headers.authorization.split(' ');
    jwt.verify(token, process.env.jwt);
    next();
  } catch (e) {
    errorTemplate(res, e, messages.auth_failed, 500);
  }
};
