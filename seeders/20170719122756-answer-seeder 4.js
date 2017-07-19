'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {


    return queryInterface.bulkInsert('Answers', [{
      society: 9,
      lonely: 9,
      drink: 9,
      hash: 9,
      feel: 9,
      relation: 1,
      economy: 1,
      community: 5,
      contribute: 5,
      smoke: 5,
      snus: 2,
      sex: 3,
      deny: 2,
      createdAt: '2017-07-13',
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
