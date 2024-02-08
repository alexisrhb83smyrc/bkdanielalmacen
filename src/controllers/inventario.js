const InventarioService = require('../services/inventario');

const getAllInventario = async (req, res) => {
    try {
        const inventario = await InventarioService.getAllInventario();
        res.status(200).json(inventario);
    } catch (error) {
        console.error('Error al obtener el inventario:', error.message);
        res.status(500).json({message: 'Error interno del servidor'});
    }
};

const getInventarioByProductId = async (req, res) => {
    const {producto_id} = req.params;
    try {
        const inventario = await InventarioService.getInventarioByProductId(producto_id);
        res.status(200).json(inventario);
    } catch (error) {
        console.error('Error al obtener el inventario para el producto con ID ' + producto_id + ':', error.message);
        res.status(500).json({message: 'Error interno del servidor'});
    }
};

const createInventario = async (req, res) => {
    const {producto_id, cantidad} = req.body;
    try {
        const response = await InventarioService.createInventario(producto_id, cantidad);
        res.status(201).json(response);
    } catch (error) {
        console.error('Error al crear el inventario:', error.message);
        res.status(500).json({message: 'Error interno del servidor'});
    }
};

const updateInventario = async (req, res) => {
    const {producto_id} = req.params;
    const {cantidad} = req.body;
    try {
        const response = await InventarioService.updateInventario(producto_id, cantidad);
        res.status(200).json(response);
    } catch (error) {
        console.error('Error al actualizar el inventario:', error.message);
        res.status(500).json({message: 'Error interno del servidor'});
    }
};

const deleteInventario = async (req, res) => {
    const {producto_id} = req.params;
    try {
        await InventarioService.deleteInventario(producto_id);
        res.status(200).json({message: 'Producto eliminado del inventario correctamente'});
    } catch (error) {
        console.error('Error al eliminar el producto del inventario:', error.message);
        res.status(500).json({message: 'Error interno del servidor'});
    }
};

module.exports = {
    getAllInventario,
    getInventarioByProductId,
    createInventario,
    updateInventario,
    deleteInventario
};
