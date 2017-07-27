'use strict';
module.exports = function(sequelize, DataTypes) {
  var ControlDb = sequelize.define('ControlDb', {
    date1: DataTypes.DATE,
    date2: DataTypes.DATE,
    access: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ControlDb;
};