const express = require('express');
const authService = require('../../../services/v1/auth/auth');
let router = express.Router();

router.post('/register',  authService.register);


module.exports = router;