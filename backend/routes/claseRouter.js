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
    getUsersClassesController,
    addUserClaseController,
    aforoController,
 } = require('../controllers/clases');
const authUser = require('../middlewares/authUser.js');


claseRouter.get('/', getClasesController);
claseRouter.get('/:id_clase', getClaseByIdController);
claseRouter.get('/dia/:dia/semana/:semana', getClaseByDayAndWeekController);
claseRouter.get('/semana/:semana', getClasesByWeekController);
claseRouter.get('/mes/:mes/semana/:semana', getClasesMonthAndWeekController);
claseRouter.get('/dia/:dia', getClasesByDayController);
claseRouter.get('/usersclass/:id_clase', getUsersClassesController);

claseRouter.post('/clases', authUser, addClaseController);
claseRouter.post('/userclase', addUserClaseController);
claseRouter.put('/aforo', aforoController);


module.exports = claseRouter;