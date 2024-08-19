import product from "../service/product.service"

exports.create = (req, res) => {
    res.send({ message: "create" });
};

exports.findAll = (req, res) => {
    connection.query(
        "select * from sanpham",
        function (err, results, fields) {
            if (err) throw err;
            console.log('-> kết quả: ', results);
        }
    )
};