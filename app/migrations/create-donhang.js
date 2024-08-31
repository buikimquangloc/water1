'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Donhang', {
      id_dh: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      diachigiaohang: {
        type: Sequelize.STRING,
      },
      ngaydat: {
        type: Sequelize.DATE
      },
      thanhtien: {
        type: Sequelize.DECIMAL(13, 2)
      },
      ngayduyet: {
        type: Sequelize.DATE
      },
      ngaygiao: {
        type: Sequelize.DATE
      },
      ngaynhan: {
        type: Sequelize.DATE
      },
      danhgia: {
        type: Sequelize.INTEGER
      },
      phanhoi: {
        type: Sequelize.TEXT
      },
      tranthai: {
        type: Sequelize.ENUM('Chờ xác nhận', 'Đã duyệt', 'Đang giao', 'Đã giao'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Donhang');
  }
};