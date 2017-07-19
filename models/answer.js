'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    society: DataTypes.INTEGER,
    lonely: DataTypes.INTEGER,
    drink: DataTypes.INTEGER,
    hash: DataTypes.INTEGER,
    feel: DataTypes.INTEGER,
    relation: DataTypes.INTEGER,
    economy: DataTypes.INTEGER,
    community: DataTypes.INTEGER,
    contribute: DataTypes.INTEGER,
    smoke: DataTypes.INTEGER,
    snus: DataTypes.INTEGER,
    sex: DataTypes.INTEGER,
    deny: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Answer;
};