'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Users', [{
        name: 'grilapp',
        password: '64f91417c275aea2d043b7bd000bbf995cc79559a1380e0dba2ddb550b801442',
        isAdmin: false,
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
