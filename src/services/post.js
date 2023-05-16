const { Op } = require('sequelize');
const { User, Category, BlogPost } = require('../models');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (post === null) {
    return { type: 'POST_NOT_FOUND', message: 'Post does not exist' };
  }
  return { type: null, message: post };
};

const updatePost = async (id, { title, content }) => {
await BlogPost.update({ title, content }, { where: { id } });
const post = await getPostById(id);
return post;
};

const deletePost = async (id) => {
 await BlogPost.destroy({ where: { id } });
 return true;
};

const searchPostByParams = async (q) => {
  const posts = await BlogPost.findAll({
    where: { [Op.or]: [
      { title: { [Op.like]: `%${q}%` } },
      { content: { [Op.like]: `%${q}%` } },
    ],      
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return posts;
};

module.exports = {
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPostByParams,
};
