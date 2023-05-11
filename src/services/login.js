const { User } = require('../models');

const checkIfUserExists = async (email) =>
  User.findAll({ where: { email } });

module.exports = {
    checkIfUserExists,
};