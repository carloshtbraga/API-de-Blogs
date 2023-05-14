module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
      },
      displayName: {
        type: DataTypes.STRING,
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'users',
    }
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: "user_id",
      as: "BlogPosts",
    });
  };

  return User;
};
