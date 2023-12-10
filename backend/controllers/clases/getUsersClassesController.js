
const { sendQuery } = require('../../db/connectToDB');

async function getUsersClassesController(req, res, next) {
    console.log('desde getusers');
  const { id_clase } = req.params;

  try {
    const results = await sendQuery(`
      SELECT DISTINCT u.id_user, u.nombre, u.apellidos, u.email, uc.aforo_actual
      FROM usuarios_clases uc
      JOIN users u 
      ON uc.id_user = u.id_user
      WHERE uc.id_clase = ?;
    `, [id_clase]);

    res.send({
      ok: true,
      data: results,
      error: null,
      message: null,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = getUsersClassesController;
