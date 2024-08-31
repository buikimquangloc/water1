'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Motasp', {
      id_mota: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      loainuoc: {
        type: Sequelize.STRING,
      },
      huongvi: {
        type: Sequelize.STRING,
      },
      gas: {
        type: Sequelize.STRING,
      },
      luongduong: {
        type: Sequelize.STRING,
      },
      huongdansudung: {
        type: Sequelize.TEXT,
      },
      noisanxuat: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Motasp');
  }
};