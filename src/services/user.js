const { User } = require('../models');

const createNewUser = async ({ displayName, email, password }) =>
  User.create({ displayName, email, password });

const getAllUsers = async () => User.findAll({ attributes: { exclude: ['password'] } });

module.exports = {
    createNewUser,
    getAllUsers,
};