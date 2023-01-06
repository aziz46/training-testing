const jwt = require('jsonwebtoken');

const SECRET_KEY = 'rahasia';

const generateToken = (payload) => {
  const token = jwt.sign(payload, SECRET_KEY);
  return token;
};

const verifyToken = (token) => {
  // const decoded = jwt.verify(SECRET_KEY, token);
  const decoded = jwt.verify(token, SECRET_KEY);
  return decoded;
};

module.exports = {
  generateToken,
  verifyToken,
};
