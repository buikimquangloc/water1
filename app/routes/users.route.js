const express = require('express');
const users =require('../controller/user.controller');
const router = express.Router();

router.get('/', users.getUsers);

module.exports = router;