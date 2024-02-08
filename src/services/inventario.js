const Inventario = require('../models/Inventario');

const getAllInventario = async () => {
    return await Inventario.getAll();
};

const getInventarioByProductoId = async (productoId) => {
    return await Inventario.getByProductId(productoId);
};

const createInventario = async (productoId, cantidad) => {
    const nuevoInventario = new Inventario(productoId, cantidad);
    return await nuevoInventario.save();
};

const updateInventario = async (productoId, cantidad) => {
    const inventario = new Inventario(productoId, cantidad);
    return await inventario.update(productoId, cantidad);
};

const deleteInventario = async (productoId) => {
    await Inventario.deleteByProductId(productoId);
};

module.exports = {
    getAllInventario,
    getInventarioByProductoId,
    createInventario,
    updateInventario,
    deleteInventario
};
