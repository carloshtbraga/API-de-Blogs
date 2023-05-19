const express = require('express');
const { tokenVerifier } = require('../utils/tokenTable');
const { blogPostController } = require('../controllers');
const { postOwner } = require('../middlewares/postOwner');
const { postValidation } = require('../middlewares/postValidation');

const router = express.Router();
router.get('/post/search', tokenVerifier, blogPostController.searchPostByParams);
router.get('/post', tokenVerifier, blogPostController.getAllPosts);
router.get('/post/:id', tokenVerifier, blogPostController.getPostById);
router.post('/post', tokenVerifier, postValidation, blogPostController.insertPost);
router.put('/post/:id', tokenVerifier, postValidation, postOwner, blogPostController.updatePost);
router.delete('/post/:id', tokenVerifier, postOwner, blogPostController.deletePost);

module.exports = router;