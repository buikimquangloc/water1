const express = require('express');
const product =require('../controller/product.controller');
const router = express.Router();

router.get('/', product.getProduct);

module.exports = router;