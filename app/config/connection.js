const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('water', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  timezone: '+07:00', // For Vietnam time zone
});

let connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    
}

module.exports = connection;

