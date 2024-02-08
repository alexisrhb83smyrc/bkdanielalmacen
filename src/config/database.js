const mysql = require('mysql2/promise');
require('dotenv').config();

class MySQLConnection {
    constructor() {
        this.config = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        };
        this.connection = null;
    }

    async connect() {
        try {
            this.connection = await mysql.createConnection(this.config);
        } catch (error) {
            throw error;
        }
    }

    async query(sql, args) {
        try {
            const [rows, fields] = await this.connection.execute(sql, args);
            return rows;
        } catch (error) {
            console.error('Error al ejecutar la consulta:', error.message);
            throw error;
        }
    }

    async close() {
        try {
            if (this.connection) {
                await this.connection.end();
            }
        } catch (error) {
            console.error('Error al cerrar la conexión:', error.message);
            throw error;
        }
    }
}

module.exports = MySQLConnection;
