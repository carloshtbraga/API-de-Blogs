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

const oi = async (id) => {
const post = await BlogPost.findOne({ where: { id }, include: { model: User, as: 'user' } });
return post;
};

const deletePost = async (id, user) => {
  const post = await oi(id);
  if (!post) return { type: 'oi', message: 'Post does not exist' };
  console.log('postUserDataValuesEmail', post.user.dataValues.email);
  console.log('user', user.username);
  if ((post.user.dataValues.email !== user.username)) { 
    return { type: 'tchau', message: 'Unauthorized user' }; 
  }
 await BlogPost.destroy({ where: { id } });
 return { type: null, message: '' };
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
