const { blogPostService } = require('../services');

const getAllPosts = async (req, res) => {
    const posts = await blogPostService.getAllPosts();
    return res.status(200).json(posts);
  };

module.exports = {
    getAllPosts,
};