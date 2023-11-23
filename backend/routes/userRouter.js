const express = require('express');
const userRouter = express.Router();

const { addUserController, loginUserController, activateUserController } = require('../controllers/users');

userRouter.get('/users/activate/:registrationCode', activateUserController);
userRouter.post('/users/', addUserController );
userRouter.post('/users/login', loginUserController);

module.exports = userRouter