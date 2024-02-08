const entradaService = require('../services/entrada');

const getAllEntradas = async (req, res) => {
    try {
        const entradas = await entradaService.getAllEntradas();
        res.json(entradas);
    } catch (error) {
        console.error('Error al obtener todas las entradas:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getEntradaById = async (req, res) => {
    const entradaId = req.params.id;
    try {
        const entrada = await entradaService.getEntradaById(entradaId);
        if (!entrada) {
            return res.status(404).json({ message: 'Entrada no encontrada' });
        }
        res.json(entrada);
    } catch (error) {
        console.error('Error al obtener la entrada por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createEntrada = async (req, res) => {
    const { producto_id, cantidad, fecha } = req.body;
    try {
        const nuevaEntrada = await entradaService.createEntrada(producto_id, cantidad, fecha);
        res.status(201).json(nuevaEntrada);
    } catch (error) {
        console.error('Error al crear la entrada:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateEntrada = async (req, res) => {
    const entradaId = req.params.id;
    const { cantidad, fecha } = req.body;
    const producto = await entradaService.getEntradaById(entradaId)
    try {
        const entradaActualizada = await entradaService.updateEntrada(entradaId, producto.producto_id, cantidad, fecha);
        res.json(entradaActualizada);
    } catch (error) {
        console.error('Error al actualizar la entrada:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteEntrada = async (req, res) => {
    const entradaId = req.params.id;
    try {
        await entradaService.deleteEntrada(entradaId);
        res.json({ message: 'Entrada eliminada exitosamente' });
    } catch (error) {
        console.error('Error al eliminar la entrada:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getAllEntradas,
    getEntradaById,
    createEntrada,
    updateEntrada,
    deleteEntrada,
};
