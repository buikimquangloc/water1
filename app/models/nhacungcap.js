'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nhacungcap extends Model {
    static associate(models) {
      // define association here
    }
  }
  Nhacungcap.init({
    tencongty: DataTypes.STRING,
    thuonghieu: DataTypes.STRING,
    daidien: DataTypes.STRING,
    sdt_ncc: DataTypes.STRING,
    email_ncc: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Nhacungcap',
  });
  return Nhacungcap;
}; 