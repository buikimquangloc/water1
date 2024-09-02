'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donhang extends Model {
    static associate(models) {
      // define association here
    }
  }
  Donhang.init({
    diachigiaohang: DataTypes.STRING,
    ngaydat: DataTypes.DATE,
    thanhtien: DataTypes.STRING,
    ngayduyet: DataTypes.DATE,
    ngaygiao: DataTypes.DATE,
    ngaynhan: DataTypes.DATE,
    danhgia: DataTypes. INTEGER,
    phanhoi: DataTypes.STRING,
    trangthai: DataTypes.ENUM('Chờ xác nhận', 'Đã duyệt', 'Đang giao', 'Đã giao'),
    // makh: DataTypes.STRING,
    // masp: DataTypes.STRING,
    // manv: DataTypes.STRING,
    // madv: DataTypes.STRING,


  }, {
    sequelize,
    modelName: 'Donhang',
  });
  return Donhang;
}; 