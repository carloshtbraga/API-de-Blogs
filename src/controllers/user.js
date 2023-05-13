const { userService } = require('../services');
const { tokenGenerator } = require('../utils/tokenTable');

const createNewUser = async (req, res) => {
  const { displayName, email, password } = req.body;
  await userService.createNewUser({ displayName, email, password });
  return res.status(201).json({ token: tokenGenerator(email) });
};

module.exports = {
    createNewUser,
};