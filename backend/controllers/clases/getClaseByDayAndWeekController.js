const  getClaseDayAndWeek = require('../../helpers/getClaseDayAndWeek.js');

async function getClasesByDayAndWeekController(req, res, next) {
    const { dia, semana } = req.params;
    console.log('probando');
    console.log(dia);
    console.log(semana);

    try {
        const results = await getClaseDayAndWeek(dia, semana);
        res.status(200).json({
            data: results,
            error: null,
            message: 'Clases filtradas correctamente',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = getClasesByDayAndWeekController;
