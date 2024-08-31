'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hinhanhsp', {
      id_hinhanh: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hinhanh: {
        type: Sequelize.BLOB
      },
      urlhinhanh: {
        type: Sequelize.JSON,
        allowNull: true,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Hinhanhsp');
  }
};