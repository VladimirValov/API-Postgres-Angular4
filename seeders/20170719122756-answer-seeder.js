'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {


    return queryInterface.bulkInsert('Answers', [{
      society: 1,
      lonely: 2,
      drink: 3,
      hash: 4,
      feel: 5,
      relation: 6,
      economy: 7,
      community: 8,
      contribute: 9,
      smoke: 10,
      snus: 9,
      sex: 8,
      deny: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);    
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
