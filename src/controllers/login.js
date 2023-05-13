const { loginService } = require('../services');
const { tokenGenerator } = require('../utils/tokenTable');

const login = async (req, res) => {
  const { email } = req.body;
  const dataValues = await loginService.checkIfUserExists(email);
  if (dataValues.length === 0) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return res.status(200).json({ token: tokenGenerator(email) });
};

module.exports = {
    login,
};