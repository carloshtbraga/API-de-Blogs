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

const getUserById = async (req, res) => {
  const id = Number(req.params.id);
  const { type, message } = await userService.getUserById(id);
  console.log('oieeeeeeeeee', message);
  if (type) return res.status(404).json({ message });  
  return res.status(200).json(message);
};

const deleteUser = async (req, res) => {
  const token = req.headers.authorization;
  await userService.deleteUser(token); 
  return res.sendStatus(204);
};

module.exports = {
    createNewUser,
    getAllUsers,
    getUserById,
    deleteUser,
};