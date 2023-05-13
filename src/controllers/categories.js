const { categoryService } = require('../services');

const createNewCategory = async (req, res) => {
  const category = req.body.name;
  if (!category) {
 return res.status(400).json({
    message: '"name" is required',
  }); 
}
  
  await categoryService.createNewCategory(category);
  return res.status(201).json({ name: category });
};

module.exports = {
    createNewCategory,
};