const { User } = require('../models');

const createNewUser = async ({ displayName, email, password }) =>
  User.create({ displayName, email, password });

module.exports = {
    createNewUser,
};