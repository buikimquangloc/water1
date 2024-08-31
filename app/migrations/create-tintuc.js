'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tintuc', {
      id_tintuc: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      noidung: {
        type: Sequelize.TEXT
      },
      url: {
        type: Sequelize.JSON
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tintuc');
  }
};