const { Category } = require('../models');

const createNewCategory = async (category) =>
  Category.create(category);

module.exports = {
    createNewCategory,
};