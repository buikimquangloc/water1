'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tintuc extends Model {
    static associate(models) {
      // define association here
    }
  }
  Tintuc.init({
    noidung: DataTypes.TEXT,
    url: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'Tintuc',
  });
  return Tintuc;
}; 