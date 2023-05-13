const express = require('express');
const { categoryController } = require('../controllers');
const { tokenVerifier } = require('../utils/tokenTable');

const router = express.Router();

router.post('/categories', tokenVerifier, categoryController.createNewCategory);

module.exports = router;