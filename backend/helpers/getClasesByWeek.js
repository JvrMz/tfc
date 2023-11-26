const { sendQuery } = require('../db/connectToDB.js');

async function getClasesByWeek(week) {
    try {
        const results = await sendQuery(
            'SELECT * FROM clases WHERE semana = ?',
            [week]
        );
        return results;
    } catch (error) {
        throw error;
    }
}

module.exports = getClasesByWeek ;