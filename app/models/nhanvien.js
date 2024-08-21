'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nhanvien extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    MaCV: DataTypes.CHAR(16),
    SDT_NV: DataTypes.STRING,
    Email_NV: DataTypes.STRING,
    Password_NV: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nhanvien',
  });
  return Nhanvien;
};