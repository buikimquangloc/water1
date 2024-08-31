'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Chucvu extends Model {
    static associate(models) {
      Chucvu.hasMany(models.Nhanvien, { foreignKey: 'ChucvuId' });
    }
  }

  Chucvu.init({
    chucvu: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chucvu',
  });

  return Chucvu;
};
