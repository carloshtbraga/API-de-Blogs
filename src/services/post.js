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

module.exports = {
  getAllPosts,
  getPostById,
  updatePost,
};
