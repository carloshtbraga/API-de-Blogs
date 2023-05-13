const express = require('express');
const { categoryController } = require('../controllers');
const { tokenVerifier } = require('../utils/tokenTable');

const router = express.Router();
router.get('/categories', tokenVerifier, categoryController.getAllCategories);
router.post('/categories', tokenVerifier, categoryController.createNewCategory);

module.exports = router;