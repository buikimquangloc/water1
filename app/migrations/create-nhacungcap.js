'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Nhacungcap', {
      id_ncc: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tencongty: {
        type: Sequelize.STRING,
      },
      thuonghieu: {
        type: Sequelize.STRING,
      },
      daidien: {
        type: Sequelize.STRING,
      },
      sdt_ncc: {
        type: Sequelize.STRING,
      },
      email_ncc: {
        type: Sequelize.TEXT,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Nhacungcap');
  }
};