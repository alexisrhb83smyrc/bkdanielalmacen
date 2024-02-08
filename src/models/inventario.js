const MySQLConnection = require('../config/database');

class Inventario {
    constructor(producto_id, cantidad) {
        this.producto_id = producto_id;
        this.cantidad = cantidad;
    }

    static async getAll() {
        const db = new MySQLConnection();
        await db.connect();
        const rows = await db.query('SELECT * FROM inventario');
        await db.close();
        return rows;
    }

    static async getByProductId(producto_id) {
        const db = new MySQLConnection();
        await db.connect();
        const rows = await db.query('SELECT * FROM inventario WHERE producto_id = ?', [producto_id]);
        await db.close();
        return rows[0];
    }

    async save() {
        const db = new MySQLConnection();
        await db.connect();
        await db.query('INSERT INTO inventario (producto_id, cantidad) VALUES (?, ?)', [this.producto_id, this.cantidad]);
        await db.close();
    }

    async update() {
        const db = new MySQLConnection();
        await db.connect();
        await db.query('CALL actualizar_inventario(?, ?)', [this.producto_id, this.cantidad]);
        await db.close();
    }

    static async deleteByProductId(producto_id) {
        const db = new MySQLConnection();
        await db.connect();
        await db.query('DELETE FROM inventario WHERE producto_id = ?', [producto_id]);
        await db.close();
    }
}

module.exports = Inventario;
