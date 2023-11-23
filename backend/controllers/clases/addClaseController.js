
const { sendQuery } = require('../../db/connectToDB.js');

require('dotenv').config();

async function addClaseController (req, res, next) {

    try {

        const { dia, hora, semana, user_id, id_gym } = req.body;

        const results = await sendQuery(`
            INSERT INTO clases
            (dia, hora, semana, user_id, id_gym)
            VALUES (?, ?, ?, ?, ?);
            `, [dia, hora, semana, user_id, id_gym]
        );

        res.status(200).send({
            id: results.insertId,
            data: null,
            error: null,
            message: 'Clase creada correctamente.'
        });
    } catch (error) {
        // Aqui no llamo a next() ya que se maneja el error en el mismo middleware.
        res.status(500).json({ error: error.message }); 
    }
}

module.exports = addClaseController;
