const express = require('express');
const router = express.Router();

// Importamos las rutas.
const userRouter = require('./userRouter');
const claseRouter = require('./claseRouter');

// Establecemos las rutas en un middleware.
router.use(userRouter);
router.use(claseRouter);

module.exports = router;