const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const tokenGenerator = (email) => {
  const payload = {
    username: email,
    admin: false,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
  });
  return token;
};

module.exports = { tokenGenerator };