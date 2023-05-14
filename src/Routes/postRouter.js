const express = require('express');
const { tokenVerifier } = require('../utils/tokenTable');
const { blogPostController } = require('../controllers');

const router = express.Router();

router.get('/post', tokenVerifier, blogPostController.getAllPosts);

module.exports = router;