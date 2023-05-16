const { blogPostService } = require('../services');
const { verifier } = require('../utils/tokenTable');

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

const deletePost = async (req, res) => {
    const id = Number(req.params.id);
    const token = req.headers.authorization;
    const user = verifier(token);    

    const { type, message } = await blogPostService.deletePost(id, user);
    if (type === 'oi') return res.status(404).json({ message });
    if (type === 'tchau') return res.status(401).json({ message });

    return res.status(204).json({ message });
};

const searchPostByParams = async (req, res) => {
    const { q } = req.query;
    const post = await blogPostService.searchPostByParams(q);
    return res.status(200).json(post);
};

module.exports = {
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
    searchPostByParams,
};