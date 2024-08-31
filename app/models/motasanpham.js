'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Motasp extends Model {
    static associate(models) {
      // define association here
    }
  }
  Motasp.init({
    loainuoc: DataTypes.STRING,
    huongvi: DataTypes.STRING,
    gas: DataTypes.STRING,
    luongduong: DataTypes.STRING,
    huongdansudung: DataTypes.TEXT,
    noisanxuat: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Motasp',
  });
  return Motasp;
}; 