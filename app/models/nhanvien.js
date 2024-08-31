'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Nhanvien extends Model {
    static associate(models) {
      // Nhanvien thuộc về một Chucvu
      Nhanvien.belongsTo(models.Chucvu, { foreignKey: 'ChucvuId' });
    }
  }

  Nhanvien.init({
    sdt_nv: DataTypes.STRING,
    email_nv: DataTypes.STRING,
    password_nv: DataTypes.STRING,
    ChucvuId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Chucvu', // tên của bảng model được tham chiếu
        key: 'id_cv', // khóa chính của model được tham chiếu
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
  }, {
    sequelize,
    modelName: 'Nhanvien',
  });

  return Nhanvien;
};
