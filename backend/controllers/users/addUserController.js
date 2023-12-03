
const { v4: uuidv4 } = require('uuid');
const { sendQuery } = require('../../db/connectToDB.js');
const sendEmail = require('../../helpers/sendEmail.js');

async function addUserController (req, res) {
    
    try {
        const { nombre, apellidos, email, cuota } = req.body;

        if(!nombre || !apellidos || !email ){
            return res.status(401).send('Todos los campos son necesarios');
        }

        // Creamos un código de registro aleatorio
        const registrationCode = uuidv4();
        // Mail para activar la cuenta y establecer la contraseña del usuario
        const subject = 'Activar tu usuario en Eko Boxeo 😃';
        const emailHTML = `
        <h1>¡Bienvenid@ a Eko ${nombre} ${apellidos}!</h1>
        <h2>Gimnasio de boxeo</h2>
        <img src="https://i.postimg.cc/vHkzgZPp/logo.png">

        <p>Por favor, activa tu usario y establece tu contraseña en el siguiente enlace 👉 <a href="http://localhost:5173/reset/${registrationCode}">Activar tu usuario</a></p>
        `;

        await sendEmail(email, subject, emailHTML);
        
        const results = await sendQuery(`
            INSERT INTO users ( nombre, apellidos, email, cuota, registration_code)
            VALUES ( ?, ?, ?, ?, ?)
            `,
            [nombre, apellidos, email, cuota, registrationCode]
        );
        
        res.send({ 
            user_id: results.insertId,
            status: 'ok',
            mensaje: 'Usuario registrado con éxito.' });

    } catch (error) {
        return res.status(500).send('Error en el registro');
    } 
};

module.exports = addUserController;