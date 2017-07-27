'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      society: {
        type: Sequelize.INTEGER
      },
      lonely: {
        type: Sequelize.INTEGER
      },
      drink: {
        type: Sequelize.INTEGER
      },
      hash: {
        type: Sequelize.INTEGER
      },
      feel: {
        type: Sequelize.INTEGER
      },
      relation: {
        type: Sequelize.INTEGER
      },
      economy: {
        type: Sequelize.INTEGER
      },
      community: {
        type: Sequelize.INTEGER
      },
      contribute: {
        type: Sequelize.INTEGER
      },
      smoke: {
        type: Sequelize.INTEGER
      },
      snus: {
        type: Sequelize.INTEGER
      },
      sex: {
        type: Sequelize.INTEGER
      },
      deny: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Answers');
  }
};