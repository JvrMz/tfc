const { sendQuery } = require('../db/connectToDB.js');

async function getClaseDayAndWeek(day, week) {
    try {
        const results = await sendQuery(
            'SELECT * FROM clases WHERE dia = ? AND semana = ?',
            [day, week]
        );
        return results;
    } catch (error) {
        throw error;
    }
}

module.exports = getClaseDayAndWeek ;