require('dotenv').config();

const { connectToDBPool } = require('./connectToDB.js');

async function initializeDB()  {

    let connection;

    try {
        let connection = await connectToDBPool(); // tengo la conexion

        await connection.query('DROP TABLE IF EXISTS users');
        await connection.query('DROP TABLE IF EXISTS gimnasios');
        await connection.query('DROP TABLE IF EXISTS clases');
        await connection.query('DROP TABLE IF EXISTS usuarios_clases');

        await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                id_user INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                username VARCHAR(50) NOT NULL UNIQUE,
                nombre VARCHAR(50) NOT NULL,
                apellidos VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                photo VARCHAR(100),
                role enum('admin','normal') DEFAULT 'normal',
                registration_code varchar(100) DEFAULT NULL,
                isActive tinyint(1) DEFAULT 0,
                created_at DATETIME NOT NULL DEFAULT NOW(),
                modified_at datetime ON UPDATE NOW()
            )
        `);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS gimnasios (
                id_gym INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                direccion VARCHAR(100) NOT NULL,
                ciudad VARCHAR(100) NOT NULL,
                created_at datetime NOT NULL DEFAULT NOW()
            )
        `);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS clases (
                id_clase INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                mes enum('enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'),
                dia enum('lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'),
                hora enum('9', '10', '11', '14', '15', '17', '18', '19', '20'),
                semana INT,
                resolved BOOLEAN DEFAULT false,
                aforo INT DEFAULT 0,
                id_gym INT UNSIGNED NOT NULL,
            
                CONSTRAINT fk_gym_clase
                FOREIGN KEY (id_gym) REFERENCES gimnasios (id_gym)
                    ON DELETE CASCADE
                    ON UPDATE CASCADE
            )
        `);


        await connection.query(`
            CREATE TABLE IF NOT EXISTS usuarios_clases (
                id_user INT UNSIGNED NOT NULL ,
                id_clase INT UNSIGNED NOT NULL ,
                created_at datetime NOT NULL DEFAULT NOW(),
            
                PRIMARY KEY (id_user, id_clase, created_at),
                FOREIGN KEY (id_user) REFERENCES users (id_user) ON DELETE CASCADE ON UPDATE CASCADE,
                FOREIGN KEY (id_clase) REFERENCES clases (id_clase) ON DELETE CASCADE ON UPDATE CASCADE
            )
        `);

    } catch (error) {
        throw new Error(error);
    } finally {
        if (connection) connection.release();
        process.exit();
    }
}

initializeDB();