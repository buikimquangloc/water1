'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loaisp extends Model {
    static associate(models) {
      // define association here
    }
  }
  Loaisp.init({
    tenloai: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Loaisp',
  });
  return Loaisp;
}; 