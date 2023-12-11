const { sendQuery } = require('../../db/connectToDB');

async function getClaseByIdController (req, res, next) {

    const { id_clase } = req.params

    try {
        const results = await sendQuery(`
            SELECT id_clase, dia, hora, semana, id_gym
            FROM clases
            WHERE id_clase= ?;
        `, [id_clase]);

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

module.exports = getClaseByIdController;