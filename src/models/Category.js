module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    { 
      timestamps: false 
    }
  );

Category.associate = (models) => {
    Category.hasMany(models.Blog_Post, {
      foreignKey: "id",
      as: "blog_posts",
    });
Category.hasMany(models.User, {
      foreignKey: "id",
      as: "users",
    });
  };

return Category;
};
