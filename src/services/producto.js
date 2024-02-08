const Producto = require('../models/Producto');

const getAllProductos = async () => {
    return await Producto.getAll();
};

const getProductoById = async (productoId) => {
    return await Producto.getById(productoId);
};

const createProducto = async (nombre, descripcion, precio) => {
    const nuevoProducto = new Producto(null, nombre, descripcion, precio);
    await nuevoProducto.save();
    return nuevoProducto;
};

const updateProducto = async (productoId, nombre, descripcion, precio) => {
    const producto = new Producto(productoId, nombre, descripcion, precio);
    await producto.update();
    return producto;
};

const deleteProducto = async (productoId) => {
    await Producto.deleteById(productoId);
};

module.exports = {
    getAllProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto,
};
