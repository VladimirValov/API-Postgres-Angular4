'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {


    return queryInterface.bulkInsert('Answers', [{
      society: 4,
      lonely: 4,
      drink: 4,
      hash: 4,
      feel: 4,
      relation: 4,
      economy: 4,
      community: 4,
      contribute: 4,
      smoke: 4,
      snus: 4,
      sex: 4,
      deny: 4,
      createdAt: '2017-07-12',
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
