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
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      underscored: true,
      timestamps: false,
    }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: "userId",
      as: "users",
    });
  };

  return BlogPost;
};
