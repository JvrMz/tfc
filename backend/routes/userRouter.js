const express = require('express');
const userRouter = express.Router();

const { addUserController } = require('../controllers/users');

userRouter.post('/users/', addUserController );

module.exports = userRouter