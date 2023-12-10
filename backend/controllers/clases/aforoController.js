const { sendQuery } = require('../../db/connectToDB');

async function aforoController(req, res, next) {
    const { id_clase } = req.body;

    try {
        // Obtén el aforo actual de la clase
        const getAforo = `
            SELECT aforo_actual
            FROM usuarios_clases
            WHERE id_clase = ?;
        `;
        const aforoResults = await sendQuery(getAforo, [id_clase]);

        if (aforoResults.length === 0) {
            return res.status(404).json({
                ok: false,
                data: null,
                error: 'Clase no encontrada',
                message: null,
            });
        }

        const aforoActual = aforoResults[0].aforo_actual;

        // Actualiza el aforo_actual
        const updateAforoQuery = `
            UPDATE usuarios_clases
            SET aforo_actual = ?
            WHERE id_clase = ?;
        `;
        await sendQuery(updateAforoQuery, [aforoActual + 1, id_clase]);

        res.status(200).json({
            ok: true,
            data: null,
            error: null,
            message: 'Aforo actualizado exitosamente',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = aforoController;
