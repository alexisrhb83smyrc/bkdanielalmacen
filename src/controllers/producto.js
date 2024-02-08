const productoService = require('../services/producto');

const getAllProductos = async (req, res) => {
    try {
        const productos = await productoService.getAllProductos();
        console.log(productos)
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener todos los productos:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getProductoById = async (req, res) => {
    const productoId = req.params.id;
    try {
        const producto = await productoService.getProductoById(productoId);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        console.error('Error al obtener el producto por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createProducto = async (req, res) => {
    const { nombre, descripcion, precio } = req.body;
    try {
        const nuevoProducto = await productoService.createProducto(nombre, descripcion, precio);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateProducto = async (req, res) => {
    const productoId = req.params.id;
    const { nombre, descripcion, precio } = req.body;
    try {
        const productoActualizado = await productoService.updateProducto(productoId, nombre, descripcion, precio);
        res.json(productoActualizado);
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteProducto = async (req, res) => {
    const productoId = req.params.id;
    try {
        await productoService.deleteProducto(productoId);
        res.json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getAllProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto,
};
