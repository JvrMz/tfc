const express = require('express');
const claseRouter = express.Router();

const { 
    addClaseController,
    getClasesController,
    getClaseByIdController,
    getClaseByDayAndWeekController
 } = require('../controllers/clases');
const authUser = require('../middlewares/authUser.js');


claseRouter.get('/', getClasesController);
claseRouter.get('/:id_clase', getClaseByIdController);
claseRouter.get('/dia/:dia/semana/:semana', getClaseByDayAndWeekController);
claseRouter.post('/clases', authUser, addClaseController);


module.exports = claseRouter;