const { User, Category, BlogPost } = require('../models');

const getAllPosts = async () => {
    const posts = await BlogPost.findAll(
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
    },
);
return posts;
  }; 

  const getPostById = async (id) => {
    const post = await BlogPost.findByPk(id, { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
    });
    if (post === null) {
      return { type: 'POST_NOT_FOUND', message: 'Post does not exist' };
    }
    return { type: null, message: post };
  };

module.exports = {
getAllPosts,
getPostById,
};