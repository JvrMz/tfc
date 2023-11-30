
const bcrypt = require('bcrypt');
const { sendQuery } = require('../../db/connectToDB.js');


async function resetPasswordController(req, res, next) {

    let registrationCode;

    try {
        registrationCode = req.params.registrationCode;
    } catch (error) {
        return res.status(400).json({ error: 'El código de registro no es válido' });
    }

    try {
        const [user] = await sendQuery(
            'SELECT * FROM users WHERE registration_code = ?', [registrationCode]
        );

        if (!user) {
            return res.status(404).json({ error: 'El código de registro no existe' });
        }

        // Guardo la contraseña hasheada
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Actualiza la contraseña en la base de datos
        await sendQuery(`
            UPDATE users
            SET password = ?, registration_code = NULL, isActive = true, modified_at = ? 
            WHERE registration_code = ?
        `, [hashedPassword, new Date(), registrationCode]);

        res.json({
            ok: true,
            nombre: user.nombre,
            error: null,
            message: 'Contraseña restablecida con éxito.'
        });

    } catch (error) {
        return next(error);
    }
}

module.exports = resetPasswordController;
