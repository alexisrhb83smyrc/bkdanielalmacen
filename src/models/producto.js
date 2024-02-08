const MySQLConnection = require('../config/database');

class Producto {
    constructor(id, nombre, descripcion, precio) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    static async getAll() {
        const db = new MySQLConnection();
        await db.connect();
        const rows = await db.query('SELECT * FROM productos');
        await db.close();
        return rows;
    }

    static async getById(productoId) {
        const db = new MySQLConnection();
        await db.connect();
        const rows = await db.query('SELECT * FROM productos WHERE id = ?', [productoId]);
        await db.close();
        return rows[0];
    }

    async save() {
        const db = new MySQLConnection();
        await db.connect();
        const result = await db.query('INSERT INTO productos (nombre, descripcion, precio) VALUES (?, ?, ?)', [this.nombre, this.descripcion, this.precio]);
        await db.close();
        this.id = result.insertId;
        return this;
    }

    async update() {
        const db = new MySQLConnection();
        await db.connect();
        await db.query('UPDATE productos SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?', [this.nombre, this.descripcion, this.precio, this.id]);
        await db.close();
        return this;
    }

    static async deleteById(productoId) {
        const db = new MySQLConnection();
        await db.connect();
        await db.query('DELETE FROM productos WHERE id = ?', [productoId]);
        await db.close();
    }
}

module.exports = Producto;
