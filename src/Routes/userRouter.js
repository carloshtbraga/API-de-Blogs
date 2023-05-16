const express = require('express');
const { tokenVerifier } = require('../utils/tokenTable');
const { userPostValidation, userEmailValidation } = require('../middlewares/userPostValidation');
const { userController } = require('../controllers');

const router = express.Router();

router.delete('/user/me', tokenVerifier, userController.deleteUser);
router.get('/user', tokenVerifier, userController.getAllUsers);
router.get('/user/:id', tokenVerifier, userController.getUserById);
router.post('/user', userPostValidation, userEmailValidation, userController.createNewUser);

module.exports = router;