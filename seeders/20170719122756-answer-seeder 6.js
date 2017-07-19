'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {


    return queryInterface.bulkInsert('Answers', [{
      society: 10,
      lonely: 8,
      drink: 6,
      hash: 4,
      feel: 2,
      relation: 1,
      economy: 1,
      community: 8,
      contribute: 6,
      smoke: 1,
      snus: 3,
      sex: 8,
      deny: 10,
      createdAt: '2017-07-11',
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
