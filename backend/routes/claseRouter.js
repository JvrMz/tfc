const express = require('express');
const claseRouter = express.Router();

const { 
    addClaseController,
    getClasesController,
    getClaseByIdController,
    getClaseByDayAndWeekController,
    getClasesByWeekController,
    getClasesMonthAndWeekController,
    getClasesByDayController,
    addUserClaseController
 } = require('../controllers/clases');
const authUser = require('../middlewares/authUser.js');


claseRouter.get('/', getClasesController);
claseRouter.get('/:id_clase', getClaseByIdController);
claseRouter.get('/dia/:dia/semana/:semana', getClaseByDayAndWeekController);
claseRouter.get('/semana/:semana', getClasesByWeekController);
claseRouter.get('/mes/:mes/semana/:semana', getClasesMonthAndWeekController);
claseRouter.get('/dia/:dia', getClasesByDayController);
claseRouter.post('/clases', authUser, addClaseController);
claseRouter.post('/userclase', addUserClaseController);


module.exports = claseRouter;