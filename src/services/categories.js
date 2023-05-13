const { Category } = require('../models');

const createNewCategory = async (category) =>
  Category.create(category);

const getAllCategories = async () => Category.findAll();

module.exports = {
    createNewCategory,
    getAllCategories,
};