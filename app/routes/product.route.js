const express = require('express');
const { getProduct } =require('../controller/product.controller');
const router = express.Router();


// router.route('/')
//     .get(product.findAll)
//     .post(product.create);

router.get('/', getProduct);

module.exports = router;