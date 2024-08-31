'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hinhanhsp extends Model {
    static associate(models) {
      // define association here
    }
  }
  Hinhanhsp.init({
    hinhanh: DataTypes.BLOB,
    urlhinhanh: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'Hinhanhsp',
  });
  return Hinhanhsp;
}; 