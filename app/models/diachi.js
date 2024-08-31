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
    tentinh: DataTypes.STRING,
    tenhuyen: DataTypes.STRING,
    tenxa: DataTypes.STRING,
    chitiet: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Diachi',
  });
  return Diachi;
};