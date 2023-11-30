const express = require('express');
const userRouter = express.Router();

const { addUserController, loginUserController, resetPasswordController,  activateUserController } = require('../controllers/users');

userRouter.get('/users/activate/:registrationCode', activateUserController);
userRouter.post('/users/', addUserController );
userRouter.post('/users/reset/:registrationCode', resetPasswordController );
userRouter.post('/users/login', loginUserController);

module.exports = userRouter