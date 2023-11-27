const { sendQuery } = require('../db/connectToDB.js');

async function getClasesByMonthAndWeek(month, week) {
    try {
        const results = await sendQuery(
            'SELECT * FROM clases WHERE mes = ? AND semana = ?',
            [month, week]
        );
        return results;
    } catch (error) {
        throw error;
    }
}

module.exports = getClasesByMonthAndWeek ;