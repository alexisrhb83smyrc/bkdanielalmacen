const MySQLConnection = require('../config/database');
const {getByProductId} = require("./inventario");

class Salida {
    constructor(id, producto_id, cantidad, fecha) {
        this.id = id;
        this.producto_id = producto_id;
        this.cantidad = cantidad;
        this.fecha = fecha;
    }

    static async getAll() {
        const db = new MySQLConnection();
        await db.connect();
        const rows = await db.query('SELECT * FROM salidas');
        await db.close();
        return rows;
    }

    static async getById(salidaId) {
        const db = new MySQLConnection();
        await db.connect();
        const rows = await db.query('SELECT * FROM salidas WHERE id = ?', [salidaId]);
        await db.close();
        return rows[0];
    }

    async save() {
        const inventario = await getByProductId(this.producto_id);
        const db = new MySQLConnection();
        await db.connect();
        const result = await db.query('INSERT INTO salidas (producto_id, cantidad, fecha) VALUES (?, ?, ?)', [this.producto_id, this.cantidad, this.fecha]);
        await db.query('CALL actualizar_inventario(?, ?)', [this.producto_id, inventario.cantidad - this.cantidad]);
        await db.close();
        this.id = result.insertId;
        return this;
    }

    async update() {
        const db = new MySQLConnection();
        await db.connect();
        const oldExit = await Salida.getById(this.id);
        const inventarioAnterior = await getByProductId(oldExit.producto_id);
        await db.query('CALL actualizar_inventario(?, ?)', [oldExit.producto_id, inventarioAnterior.cantidad + oldExit.cantidad]); // Sumar la cantidad anterior al inventario
        await db.query('UPDATE salidas SET producto_id = ?, cantidad = ?, fecha = ? WHERE id = ?', [this.producto_id, this.cantidad, this.fecha, this.id]);
        const inventarioActual = await getByProductId(this.producto_id);
        await db.query('CALL actualizar_inventario(?, ?)', [this.producto_id, inventarioActual.cantidad - this.cantidad]); // Restar la cantidad nueva al inventario
        await db.close();
        return this;
    }

    static async deleteById(salidaId) {
        const db = new MySQLConnection();
        await db.connect();
        const exitToDelete = await Salida.getById(salidaId);
        const inventario = await getByProductId(exitToDelete.producto_id);
        await db.query('CALL actualizar_inventario(?, ?)', [exitToDelete.producto_id, inventario.cantidad + exitToDelete.cantidad]);
        await db.query('DELETE FROM salidas WHERE id = ?', [salidaId]);
        await db.close();
    }

}

module.exports = Salida;
