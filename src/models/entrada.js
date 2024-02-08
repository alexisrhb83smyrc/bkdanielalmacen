const MySQLConnection = require('../config/database');
const { getByProductId } = require("./inventario");
const Inventario = require("./inventario");
const e = require("express");


class Entrada {
    constructor(id, producto_id, cantidad, fecha) {
        this.id = id;
        this.producto_id = producto_id;
        this.cantidad = cantidad;
        this.fecha = fecha;
    }

    static async getAll() {
        const db = new MySQLConnection();
        await db.connect();
        const rows = await db.query('SELECT * FROM entradas');
        await db.close();
        return rows;
    }

    static async getById(entradaId) {
        const db = new MySQLConnection();
        await db.connect();
        const rows = await db.query('SELECT * FROM entradas WHERE id = ?', [entradaId]);
        await db.close();
        return rows[0];
    }

    async save() {
        const inventario = await getByProductId(this.producto_id);
        const db = new MySQLConnection();
        await db.connect();
        const result = await db.query('INSERT INTO entradas (producto_id, cantidad, fecha) VALUES (?, ?, ?)', [this.producto_id, this.cantidad, this.fecha]);
        await db.query('CALL actualizar_inventario(?, ?)', [this.producto_id, inventario.cantidad + this.cantidad]);
        await db.close();
        this.id = result.insertId;
        return this;
    }

    async update() {
        const db = new MySQLConnection();
        await db.connect();
        const oldEntry = await Entrada.getById(this.id);
        const inventarioAnterior = await getByProductId(oldEntry.producto_id);
        await db.query('CALL actualizar_inventario(?, ?)', [oldEntry.producto_id, inventarioAnterior.cantidad - oldEntry.cantidad]);
        await db.query('UPDATE entradas SET producto_id = ?, cantidad = ?, fecha = ? WHERE id = ?', [this.producto_id, this.cantidad, this.fecha, this.id]);
        const inventarioActual = await getByProductId(this.producto_id);
        await db.query('CALL actualizar_inventario(?, ?)', [this.producto_id, inventarioActual.cantidad + this.cantidad]);
        await db.close();
        return this;
    }


    static async deleteById(entradaId) {
        const db = new MySQLConnection();
        await db.connect();
        const entryToDelete = await Entrada.getById(entradaId);
        const inventario = await getByProductId(entryToDelete.producto_id)
        await db.query('CALL actualizar_inventario(?, ?)', [entryToDelete.producto_id, inventario.cantidad - entryToDelete.cantidad]);
        await db.query('DELETE FROM entradas WHERE id = ?', [entradaId]);
        await db.close();
    }

}

module.exports = Entrada;
