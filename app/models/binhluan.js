'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Binhluan extends Model {
    static associate(models) {
      // define association here
    }
  }
  Binhluan.init({
    noidungcmt: DataTypes.TEXT,
    ngaycmt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Binhluan',
  });
  return Binhluan;
}; 