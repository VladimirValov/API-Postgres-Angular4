'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {


    return queryInterface.bulkInsert('Answers', [{
      society: 10,
      lonely: 10,
      drink: 10,
      hash: 10,
      feel: 10,
      relation: 10,
      economy: 10,
      community: 10,
      contribute: 10,
      smoke: 10,
      snus: 10,
      sex: 10,
      deny: 10,
      createdAt: '2017-07-15',
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
