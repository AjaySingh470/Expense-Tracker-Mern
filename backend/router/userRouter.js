const express = require('express');
const { loginController, logoutController, signupContorller } = require('../controller/userController');
const router = express.Router();

router.post('/login' ,loginController);
router.get('/logout', logoutController);
router.post('/signup', signupContorller);

module.exports = router;