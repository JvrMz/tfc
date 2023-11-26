require('dotenv').config();
const { connectToDBPool } = require('../../db/connectToDB.js');

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
    console.log(clasesAInsertar);
    try {
        let connection = await connectToDBPool(); // tengo la conexion

        await connection.query(`
        INSERT INTO clases
        (mes, dia, hora, semana, id_gym)
        VALUES ?;
        `,[clasesAInsertar]);

  
    } catch (error) {
        throw new Error(error);
    } finally {
        if (connection) connection.release();
        process.exit();
    }
}


const id_gym = 1; // Por defecto

generarSemanas( id_gym);