const express = require('express');
const router = express.Router();

// Importo las rutas.
const userRouter = require('./userRouter');
const claseRouter = require('./claseRouter');

// Establezco las rutas en un middleware.
router.use(userRouter);
router.use(claseRouter);

module.exports = router;