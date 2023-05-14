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

module.exports = {
getAllPosts,
};