'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diachi extends Model {
    static associate(models) {
      // define association here
    }
  }
  Diachi.init({
    Tentinh: DataTypes.STRING,
    Tenhuyen: DataTypes.STRING,
    Tenxa: DataTypes.STRING,
    Chitiet: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Diachi',
  });
  return Diachi;
};