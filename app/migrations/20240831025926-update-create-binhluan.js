'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Binhluan', {
      id_cmt: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      noidungcmt: {
        type: Sequelize.TEXT,
      },
      ngaycmt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.dropTable('Binhluan');

  }
};
