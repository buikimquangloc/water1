const express = require('express');
const product = require("../controller/product.controller");
const connection = require("../module/connect.data");

const router = express.Router();
// connection.query(
//     "select * from sanpham",
//     function(err, results, fields) {
//         if (err) throw err;
//         console.log('-> kết quả: ', results);
//     }
// );

router.route('/')
    .get(product.findAll)
    .post(product.create);

module.exports = router;