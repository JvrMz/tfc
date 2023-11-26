const  getClasesByWeek = require('../../helpers/getClasesByWeek.js');

async function getClasesByWeekController(req, res, next) {
    const { semana } = req.params;


    try {
        const results = await getClasesByWeek(semana);
        res.status(200).json({
            data: results,
            error: null,
            message: 'Clases filtradas por semana correctamente',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = getClasesByWeekController;
