
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { sendQuery } = require('../../db/connectToDB.js');
const sendEmail = require('../../helpers/sendEmail.js');

async function addUserController (req, res) {

    try {

        const { username, nombre, apellidos, email, password } = req.body;
        console.log(username, nombre, apellidos, email, password);
        // Creamos un código de registro aleatorio
        const registrationCode = uuidv4();

        const subject = 'Activar tu usario en AppBoxeo 😃';
        const emailHTML = `
        <h1>¡Bienvenid@ a AppBoxeo ${username}!</h1>
        <img src="https://picsum.photos/id/237/300/200">

        <p>Por favor, activa tu usario dando en el siguiente enlace 👉 <a href="http://localhost:${process.env.PORT}/users/activate/${registrationCode}">Activar tu usuario</a></p>
        `;
        // Enlace por implementar
        await sendEmail(email, subject, emailHTML);

        const hashedPass = await bcrypt.hash(password, 10);
        
        const results = await sendQuery(`
            INSERT INTO users (username, nombre, apellidos, email, password, registration_code)
            VALUES (?, ?, ?, ?, ?, ?)
            `,
            [username, nombre, apellidos, email, hashedPass, registrationCode]
        );
        
        res.send({ 
            user_id: results.insertId,
            status: 'ok',
            mensaje: 'Usuario registrado con éxito.' });

    } catch (error) {

        res.status(error.httpStatus).json({ error: error.message });
        
    } 
};

module.exports = addUserController;