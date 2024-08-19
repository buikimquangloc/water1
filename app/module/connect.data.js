const mysql = require('mysql');

var connection = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password : '',
    database: 'water',
 });
 
 module.exports = connection;
//  conn.connect(function (err){
//     if(err)
//     {
//         console.error('Lỗi kết nối: ' + err.stack);
//         return;    }
//     else
//         console.log('Đã kết nối với cơ sở dữ liệu.');
//  })
 