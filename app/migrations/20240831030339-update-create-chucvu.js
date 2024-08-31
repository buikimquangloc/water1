'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Chucvu', {
      id_cv: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      chucvu: {
        type: Sequelize.TEXT,
      },
    });
  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.dropTable('Chucvu');

  }
};
