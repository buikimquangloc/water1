'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Nhanvien', {
      id_nv: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // id_cv: {
      //   type: Sequelize.CHAR(16)
      // },
      sdt_nv: {
        type: Sequelize.STRING
      },
      email_nv: {
        type: Sequelize.STRING
      },
      password_nv: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Nhanvien');
  }
};