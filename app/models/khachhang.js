'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Khachhang extends Model {
    static associate(models) {
      // define association here
    }
  }
  Khachhang.init({
    username_kh: DataTypes.STRING,
    password_kh: DataTypes.CHAR(16),
    sdt_kh: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Khachhang',
  });
  return Khachhang;
}; 