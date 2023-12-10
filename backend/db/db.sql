
DROP DATABASE IF EXISTS gymDB;
CREATE DATABASE gymDB;

USE gymDB;

DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
	id_user INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255),
    cuota enum('dos', 'tres', 'seis'),
    photo VARCHAR(100),
    role enum('admin','normal') DEFAULT 'normal',
    registration_code varchar(100) DEFAULT NULL,
    isActive tinyint(1) DEFAULT 0,
    created_at DATETIME NOT NULL DEFAULT NOW(),
    modified_at datetime ON UPDATE NOW()
);

DROP TABLE IF EXISTS gimnasios;
CREATE TABLE IF NOT EXISTS gimnasios (
	id_gym INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    direccion VARCHAR(100) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    created_at datetime NOT NULL DEFAULT NOW()
);


DROP TABLE IF EXISTS clases;
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
);



/* tabla resultante de la interacción de usuarios apuntados a clases */

DROP TABLE IF EXISTS usuarios_clases;
CREATE TABLE IF NOT EXISTS usuarios_clases (
	id_user INT UNSIGNED NOT NULL ,
	id_clase INT UNSIGNED NOT NULL ,
    created_at datetime NOT NULL DEFAULT NOW(),
    aforo_actual INT DEFAULT 0,

    PRIMARY KEY (id_user, id_clase, created_at),
    FOREIGN KEY (id_user) REFERENCES users (id_user) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_clase) REFERENCES clases (id_clase) ON DELETE CASCADE ON UPDATE CASCADE
);



