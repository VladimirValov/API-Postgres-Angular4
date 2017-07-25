'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {


    return queryInterface.bulkInsert('Answers', [{
      society: RandomInt(),
      lonely: RandomInt(),
      drink: RandomInt(),
      hash: RandomInt(),
      feel: RandomInt(),
      relation: RandomInt(),
      economy: RandomInt(),
      community: RandomInt(),
      contribute: RandomInt(),
      smoke: RandomInt(),
      snus: RandomInt(),
      sex: RandomInt(),
      deny: RandomInt(),
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

function RandomInt() {
  return Math.floor(Math.random() * (11 - 0)) + 0;
}

