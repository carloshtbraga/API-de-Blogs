const { blogPostService } = require('../services');

const getAllPosts = async (req, res) => {
    const posts = await blogPostService.getAllPosts();
    return res.status(200).json(posts);
  };

const getPostById = async (req, res) => {
    const id = Number(req.params.id);
    const { type, message } = await blogPostService.getPostById(id);
    if (type) return res.status(404).json({ message });  
    return res.status(200).json(message);
};

const updatePost = async (req, res) => {
    const id = Number(req.params.id);
    const { body } = req;
    const { message } = await blogPostService.updatePost(id, body);
    return res.status(200).json(message);
};

module.exports = {
    getAllPosts,
    getPostById,
    updatePost,
};