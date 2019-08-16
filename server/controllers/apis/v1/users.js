const express = require('express');
const userService = require('../../../services/v1/user/user');
// const authClientRequest = require('../../../middlewares/authGaurd');
let router = express.Router();

router.get('/:userId', userService.getUserDetails);
router.put('/:userId',  userService.updateIme);
router.put('/phone', userService.updateImeWithPhone);

module.exports = router;