const express = require('express');
const userService = require('../../../services/v1/user/user');
const authClientRequest = require('../../../middlewares/authGaurd');
let router = express.Router();

router.get('/:userId', authClientRequest.authClientToken ,userService.getUserDetails);
router.put('/:userId', authClientRequest.authClientToken, userService.updateIme);

module.exports = router;