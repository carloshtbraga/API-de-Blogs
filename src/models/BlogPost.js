module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    "BlogPost",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: DataTypes.INTEGER,
      content: DataTypes.STRING,
      title: DataTypes.STRING,
      published: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW

      },
      updated: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW

      }
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'blog_posts'
    }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  };

  return BlogPost;
};
