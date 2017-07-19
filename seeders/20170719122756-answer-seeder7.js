'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {


    return queryInterface.bulkInsert('Answers', [{
      society: 10,
      lonely: 9,
      drink: 3,
      hash: 5,
      feel: 8,
      relation: 0,
      economy: 0,
      community: 0,
      contribute: 0,
      smoke: 0,
      snus: 0,
      sex: 0,
      deny: 0,
      createdAt: '2017-07-10',
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
