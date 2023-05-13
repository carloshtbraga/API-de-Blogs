'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', { 
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "",
    }
    });
  },

  down: async (queryInterface, Sequelize) => {
     queryInterface.dropTable('categories');
  }
};
