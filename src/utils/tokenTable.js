const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const tokenGenerator = (email) => {
  const payload = {
    username: email,
    admin: false,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return token;
};

const verifier = (token) => {
  const user = jwt.verify(token, process.env.JWT_SECRET);
  return user;
}; 

const tokenVerifier = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.headers.Authorization = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { tokenGenerator, tokenVerifier, verifier };