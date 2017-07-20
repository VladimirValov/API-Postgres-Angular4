'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {


    return queryInterface.bulkInsert('Answers', [{
      society: 7,
      lonely: 8,
      drink: 9,
      hash: 10,
      feel: 9,
      relation: 8,
      economy: 7,
      community: 6,
      contribute: 5,
      smoke: 4,
      snus: 3,
      sex: 2,
      deny: 1,
      createdAt: '2017-07-16',
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
