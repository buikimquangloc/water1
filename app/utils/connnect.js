const mysql = require('mysql');

var conn = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password : '',
    database: 'water',
    charset : 'utf8_general_ci'
 });
 
 conn.connect(function (err){
    if(err)
    {
        console.error('Lỗi kết nối: ' + err.stack);
        return;    }
    else
        console.log('Đã kết nối với cơ sở dữ liệu.');
 })
 