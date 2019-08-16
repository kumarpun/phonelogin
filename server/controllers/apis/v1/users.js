const express = require('express');
const userService = require('../../../services/v1/user/user');
// const authClientRequest = require('../../../middlewares/authGaurd');
let router = express.Router();

router.get('/:userId', userService.getUserDetails);
router.get('/', userService.getUserByPhone);

router.put('/:userId',  userService.updateIme);
// router.put('/', userService.updateImeWithPhone);

module.exports = router;