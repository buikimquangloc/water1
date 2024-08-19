import connection from "../module/connect.data";

connection.query(
    "select * from sanpham",
    function(err, results, fields) {
        // if (err) throw err;
        console.log('-> kết quả: ', results);
    }
)