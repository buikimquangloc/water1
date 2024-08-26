'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sanpham extends Model {
    static associate(models) {
      // define association here
    }
  }
  Sanpham.init({
    masp: DataTypes.CHAR(16),
    tensp: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Sanpham',
  });
  return Sanpham;
}; 