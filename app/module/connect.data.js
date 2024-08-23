const mysql = require('mysql/promise');

var connection = mysql.createPool({
    host :'localhost',
    user : 'root',
    password : '',
    database: 'water',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
 });
 
 module.exports = connection;
