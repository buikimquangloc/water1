'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Hoadon', {
      id_hd: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ngayxuathd: {
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.dropTable('Hoadon');

  }
};
