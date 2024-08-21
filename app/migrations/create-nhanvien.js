'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Nhanvien', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MaCV: {
        type: Sequelize.CHAR(16)
      },
      SDT_NV: {
        type: Sequelize.STRING
      },
      Email_NV: {
        type: Sequelize.STRING
      },
      Password_NV: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Nhanvien');
  }
};