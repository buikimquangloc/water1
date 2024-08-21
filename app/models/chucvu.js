'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chucvu extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    MaCV: DataTypes.CHAR(16),
    ChucVu: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Chucvu',
  });
  return Chucvu;
};