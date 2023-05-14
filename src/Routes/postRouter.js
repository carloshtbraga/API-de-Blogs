const express = require('express');
const { tokenVerifier } = require('../utils/tokenTable');
const { blogPostController } = require('../controllers');

const router = express.Router();

router.get('/post', tokenVerifier, blogPostController.getAllPosts);
router.get('/post/:id', tokenVerifier, blogPostController.getPostById);

module.exports = router;