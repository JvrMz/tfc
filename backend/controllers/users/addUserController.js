
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { sendQuery } = require('../../db/connectToDB.js');
const sendEmail = require('../../helpers/sendEmail.js');

async function addUserController (req, res) {
    console.log(req.body);
    try {
        const { username, nombre, apellidos, email, password } = req.body;

        // Creamos un código de registro aleatorio
        const registrationCode = uuidv4();

        const subject = 'Activar tu usario en Eko Boxeo 😃';
        const emailHTML = `
        <h1>¡Bienvenid@ a Eko gimnasio de boxeo ${username}!</h1>
        <img src="https://img.freepik.com/foto-gratis/chica-kickboxer_654080-1885.jpg?w=996&t=st=1701282201~exp=1701282801~hmac=c2976d2978e13d226c6089dfd4f223fb33d6ea3d1242f72d7ba6e7d3cba1f13a">

        <p>Por favor, activa tu usario dando en el siguiente enlace 👉 <a href="http://localhost:5173/reset/${registrationCode}">Activar tu usuario</a></p>
        `;

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