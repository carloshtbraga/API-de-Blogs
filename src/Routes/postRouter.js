const express = require('express');
const { tokenVerifier } = require('../utils/tokenTable');
const { blogPostController } = require('../controllers');
const { postOwner } = require('../middlewares/postOwner');
const { postValidation } = require('../middlewares/postValidation');

const router = express.Router();

router.get('/post', tokenVerifier, blogPostController.getAllPosts);
router.get('/post/:id', tokenVerifier, blogPostController.getPostById);
router.put('/post/:id', tokenVerifier, postValidation, postOwner, blogPostController.updatePost);

module.exports = router;