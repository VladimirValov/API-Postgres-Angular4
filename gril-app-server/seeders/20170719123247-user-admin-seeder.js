'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Users', [{
        name: 'admin',
        password: '089417bd9abf11f94d96638f0d4eacb338d8568c09bb45a45461c46850e41bcd',
        isAdmin: true,
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
