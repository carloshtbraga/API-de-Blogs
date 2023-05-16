const jwt = require('jsonwebtoken');
const { User } = require('../models');

const createNewUser = async ({ displayName, email, password }) =>
  User.create({ displayName, email, password });

const getAllUsers = async () => User.findAll({ attributes: { exclude: ['password'] } });

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (user === null) {
    return { type: 'USER_NOT_FOUND', message: 'User does not exist' };
  }
  return { type: null, message: user };
};

const deleteUser = async (token) => {
  const email = jwt.decode(token, { complete: true }).payload.username;
  await User.destroy({ where: { email } });
  return true;
};

module.exports = {
    createNewUser,
    getAllUsers,
    getUserById,
    deleteUser,
};