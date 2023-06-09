module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,

    },
      name: DataTypes.STRING,
    },
    { 
      timestamps: false,
      tableName: 'categories'
    }
  );

// Category.associate = (models) => {
//     Category.hasMany(models.BlogPost, {
//       foreignKey: "id",
//       as: "blog_posts",
//     });
// Category.hasMany(models.User, {
//       foreignKey: "id",
//       as: "users",
//     });
  // };

return Category;
};
