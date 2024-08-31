'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trangthaikm extends Model {
    static associate(models) {
      // define association here
    }
  }
  Trangthaikm.init({
    trangthai: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Trangthaikm',
  });
  return Trangthaikm;
}; 