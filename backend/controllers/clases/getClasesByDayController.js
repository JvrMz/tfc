const  getClasesByDay = require('../../helpers/getClasesByDay.js');

async function getClasesByDayController(req, res, next) {
    const { dia } = req.params;


    try {
        const results = await getClasesByDay(dia);
        res.status(200).json({
            data: results,
            error: null,
            message: 'Clases filtradas por dia correctamente',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = getClasesByDayController;
