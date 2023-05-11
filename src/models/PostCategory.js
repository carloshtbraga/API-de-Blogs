module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "PostCategory",
    {
      postId: {
        type: DataTypes.INTEGER,
      },
      categoryId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'postId',
      through: PostCategory,
      foreignKey: 'postId',
    })
    models.Category.belongsToMany(models.BlogPost, {
      as: 'categoryId',
      through: PostCategory,
      foreignKey: 'categoryId',
    })
  };

  return PostCategory;
};