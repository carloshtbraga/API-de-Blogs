const { Op } = require('sequelize');
const { User, PostCategory, Category, BlogPost } = require('../models');
const findIdFromToken = require('../utils/findIdFromToken');

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

const insertPost = async ({ title, content, categoryIds }, user) => {
  const verifyCategories = await Promise.all(categoryIds.map((cid) => Category.findByPk(cid)));
  const verifyIfCategorieIsValid = verifyCategories.some((cat) => cat === null);
  if (verifyIfCategorieIsValid) {
 return { 
    type: 'CATEGORY_NOT_FOUND', message: 'one or more "categoryIds" not found', 
  }; 
}
const decoder = await findIdFromToken(user);
const findUserFromEmail = await User.findOne({ where: { email: decoder.payload.username } });
console.log(findUserFromEmail);
const { id } = findUserFromEmail.dataValues;
const post = await BlogPost.create({ title, content, userId: id });
await Promise.all(categoryIds
  .map((e) => PostCategory.create({ postId: post.dataValues.id, categoryId: e })));
return { type: null, message: post };
};

module.exports = {
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPostByParams,
  insertPost,
};
