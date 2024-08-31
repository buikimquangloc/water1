'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Diachi', {
      id_dc: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tentinh: {
        type: Sequelize.STRING
      },
      tenhuyen: {
        type: Sequelize.STRING
      },
      tenxa: {
        type: Sequelize.STRING
      },
      chitiet: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Diachi');
  }
};