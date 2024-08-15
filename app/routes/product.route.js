const express = require('express');
const product = require("../controller/product.controller");

const router = express.Router();

router.route('/')
    .get(product.findAll)
    .post(product.create);

module.exports = router;