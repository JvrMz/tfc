
const { sendQuery } = require('../../db/connectToDB.js');

async function activateUserController (req, res, next) {

    let registrationCode;

    try {
        registrationCode = req.params.registrationCode;
    } catch (error) {
        return res.status(400).json({ error: 'El código de registro no es válido' });
    }

    try {
        const [user] = await sendQuery(
            `SELECT * FROM users WHERE registration_code = ?`, [registrationCode]
            );
        if (!user) {
            return res.status(404).json({ error: 'El código de registro no existe' });
        }

        // Actualizamos el usuario de activo 0 a activo 1.
        await sendQuery(`
            UPDATE users SET registration_code = null, isActive = true, modified_at = ? WHERE registration_code = ?`, [new Date(), registrationCode]
            );

        res.send({
            ok: true,
            nombre: user.nombre,
            error: null,
            message: 'El usuario se ha activado correctamente.'
        });

    } catch (error) {
        return next(error);
    }
}

module.exports = activateUserController;
