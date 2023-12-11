const { sendQuery } = require('../../db/connectToDB');

async function getClasesController (req, res, next) {
    try {
        const results = await sendQuery(`
            SELECT id_clase, dia, hora, semana, id_gym
            FROM clases
        `);

        res.send({
            ok: true,
            data: results,
            error: null,
            message: null
        });

    } catch (error) {
        next(error);
    }
}

module.exports = getClasesController;