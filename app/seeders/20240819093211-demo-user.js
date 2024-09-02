'use strict';
const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Lộc',
        lastName: 'Bùi',
        email: 'locbui@gmai.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // return queryInterface.bulkDelete('Users', null, {});
  }
};
