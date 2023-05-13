const express = require('express');
const { loginController } = require('../controllers');
const { loginValidation } = require('../middlewares/loginValidation');

const router = express.Router();

router.post('/login', loginValidation, loginController.login);

module.exports = router;