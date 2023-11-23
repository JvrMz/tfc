const express = require('express');
const claseRouter = express.Router();

const { 
    addClaseController,
    getClasesController,
 } = require('../controllers/clases');
const authUser = require('../middlewares/authUser.js');


claseRouter.get('/', getClasesController);
claseRouter.post('/clases', authUser, addClaseController);


module.exports = claseRouter;