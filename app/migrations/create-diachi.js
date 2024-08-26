'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Diachi', {
      id_DC: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Tentinh: {
        type: Sequelize.STRING
      },
      Tenhuyen: {
        type: Sequelize.STRING
      },
      Tenxa: {
        type: Sequelize.STRING
      },
      Chitiet: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Diachi');
  }
};