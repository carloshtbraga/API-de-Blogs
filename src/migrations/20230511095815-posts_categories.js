'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', { 
      categoryId: {
        type: Sequelize.INTEGER,
        field: 'category_id',
    
        primaryKey: true,
      },
      postId: {
        type: Sequelize.INTEGER,
        field: 'post_id',
     
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('posts_categories');
  }
};
