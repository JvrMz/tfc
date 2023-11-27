const  getClasesByMonthAndWeek = require('../../helpers/getClasesByMonthAndWeek.js');

async function getClasesMonthAndWeekController(req, res, next) {
    const { mes, semana } = req.params;


    try {
        const results = await getClasesByMonthAndWeek(mes, semana);
        res.status(200).json({
            data: results,
            error: null,
            message: 'Clases filtradas por mes y semana correctamente',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = getClasesMonthAndWeekController;
