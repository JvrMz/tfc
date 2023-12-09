const { sendQuery } = require('../../db/connectToDB.js');

async function UserClaseController (req, res, next) {
    try {

        const { id_user, id_clase } = req.body;

        const results = await sendQuery(`
            INSERT INTO usuarios_clases
            (id_user, id_clase)
             VALUES (?, ?)
             `, [id_user, id_clase]);

        
        res.status(200).send({
            id: results.insertId,
            data: null,
            error: null,
            message: 'Registro user clase correcto.'
        });
    } catch (error) {
        // Aqui no llamo a next() ya que se maneja el error en el mismo middleware.
        res.status(500).json({ error: error.message }); 
    }
}

module.exports = UserClaseController;