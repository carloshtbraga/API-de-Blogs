const { userService } = require('../services');
const { tokenGenerator } = require('../utils/tokenTable');

const createNewUser = async (req, res) => {
  const { displayName, email, password } = req.body;
  await userService.createNewUser({ displayName, email, password });
  return res.status(201).json({ token: tokenGenerator(email) });
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

module.exports = {
    createNewUser,
    getAllUsers,
};