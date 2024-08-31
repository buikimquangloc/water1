const express = require('express');
const { getProduct } =require('../controller/product.controller');
const router = express.Router();

router.get('/', getProduct);

module.exports = router;