const authController = require('../../controllers/apis/v1/auth');
const userController = require('../../controllers/apis/v1/users');

const express = require('express');
let router = express.Router();
router.use('/auth', authController);
router.use('/user', userController);
module.exports = router;