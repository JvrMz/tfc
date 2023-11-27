const { sendQuery } = require('../db/connectToDB.js');

async function getClasesByDay(day) {
    try {
        const results = await sendQuery(
            'SELECT * FROM clases WHERE dia = ?',
            [day]
        );
        return results;
    } catch (error) {
        throw error;
    }
}

module.exports = getClasesByDay ;