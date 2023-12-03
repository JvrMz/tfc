require('dotenv').config();
const bcrypt = require('bcrypt');


const { connectToDBPool } = require('./connectToDB.js');

async function generarSemanas(id_gym)  {

    let connection;

    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const horas = ['9', '10', '11', '14', '15', '17', '18', '19', '20'];

    const clasesAInsertar = [];

    for (const mes of meses) {
        for (let semana = 1; semana <= 4; semana++) {
            for (const dia of dias) {
                for (const hora of horas) {
                    clasesAInsertar.push([mes, dia, hora, semana, id_gym]);
                }
            }
        }
    }

    const passwordAdmin = '12345';
    const hashedPassword = await bcrypt.hash(passwordAdmin, 10);

    /* Iniciar aplicación, es decir, crear un gimnasio y un superusuario */
    const gym = ['Avenida albufera 12', 'Madrid'];
    const user = ['Javier', 'Maiz', 'ekoboxeo@gmail.com', hashedPassword, 'admin', '1' ];

    try {
        let connection = await connectToDBPool(); // tengo la conexion

        await connection.query(`
        INSERT INTO gimnasios
        (direccion, ciudad)
        VALUES (?);
        `,[gym]);

        await connection.query(`
        INSERT INTO clases
        (mes, dia, hora, semana, id_gym)
        VALUES ?;
        `,[clasesAInsertar]);


        await connection.query(`
        INSERT INTO users
        (nombre, apellidos, email, password, role, isActive)
        VALUES (?);
        `,[user]);

  
    } catch (error) {
        console.error(error);
        throw new Error(error);
    } finally {
        if (connection) connection.release();
        process.exit();
    }
}


const id_gym = 1; // Por defecto

generarSemanas( id_gym);