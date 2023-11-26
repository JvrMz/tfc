
const mysql = require('mysql2/promise');

const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE } = process.env;

const dbConfig = {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    timezone: 'local',
};
let pool;

async function connectToDBPool () {

    try {
        if (!pool) {
            const connection  = await mysql.createConnection(dbConfig);
            await connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_DATABASE}`);
            pool = mysql.createPool({
                host: DB_HOST,
                user: DB_USER,
                password: DB_PASS,
                database: DB_DATABASE,
                timezone: 'local',
            });
        }
        return await pool.getConnection();

    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }

}

async function sendQuery (query, values) {
    let connection;
    try {
        connection = await connectToDBPool();
        const [results] = await connection.query(query, values);
        return results;
    } catch (error) {
        throw new Error(error.message);
    } finally {
        if (connection) {
            connection.release();
        }
    }
}

module.exports = { connectToDBPool, sendQuery }; 
