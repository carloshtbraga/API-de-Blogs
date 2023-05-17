const jwt = require('jsonwebtoken');
const { BlogPost, User } = require('../models');

const postOwner = async (req, res, next) => {
  const id = Number(req.params.id);
  const token = req.headers.authorization;
  const tokenCheck = jwt.decode(token, {
    complete: true,
  });
  const user = await User.findOne({
    where: { email: tokenCheck.payload.username },
    attributes: { exclude: ['password'] }, 
  });
  const post = await BlogPost.findByPk(id);
  if (!post) {
      return res.status(404).json({
          message: 'Post does not exist',
        });
    }
  const isOwner = user.dataValues.id === post.dataValues.user_id;
  if (!isOwner) return res.status(401).json({ message: 'Unauthorized user' }); 
  
  next();
};

module.exports = {
  postOwner,
};
