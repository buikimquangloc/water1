'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CTKM extends Model {
    static associate(models) {
      // define association here
    }
  }
  CTKM.init({
    noidung_km: DataTypes.STRING,
    phantram: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'CTKM',
  });
  return CTKM;
}; 