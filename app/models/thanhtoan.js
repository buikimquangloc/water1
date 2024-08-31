'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thanhtoan extends Model {
    static associate(models) {
      // define association here
    }
  }
  Thanhtoan.init({
    phuongthuc: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Thanhtoan',
  });
  return Thanhtoan;
}; 