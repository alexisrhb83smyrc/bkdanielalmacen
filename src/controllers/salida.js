const Salida = require('../models/Salida');
const salidaService = require("../services/salida");

const getAllSalidas = async (req, res) => {
    try {
        const salidas = await Salida.getAll();
        res.status(200).json(salidas);
    } catch (error) {
        console.error('Error al obtener las salidas:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getSalidaById = async (req, res) => {
    const salidaId = req.params.id;
    try {
        const salida = await Salida.getById(salidaId);
        if (!salida) {
            res.status(404).json({ message: 'Salida no encontrada' });
            return;
        }
        res.status(200).json(salida);
    } catch (error) {
        console.error('Error al obtener la salida:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createSalida = async (req, res) => {
    const { producto_id, cantidad, fecha } = req.body;
    try {
        const nuevaSalida = new Salida(null, producto_id, cantidad, fecha);
        await nuevaSalida.save();
        res.status(201).json(nuevaSalida);
    } catch (error) {
        console.error('Error al crear la salida:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateSalida = async (req, res) => {
    const salidaId = req.params.id;
    const { cantidad, fecha } = req.body;
    const producto = await salidaService.getSalidaById(salidaId)
    try {
        const salida = new Salida(salidaId, producto.producto_id, cantidad, fecha);
        await salida.update();
        res.status(200).json({ message: 'Salida actualizada exitosamente' });
    } catch (error) {
        console.error('Error al actualizar la salida:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteSalida = async (req, res) => {
    const salidaId = req.params.id;
    try {
        await Salida.deleteById(salidaId);
        res.status(200).json({ message: 'Salida eliminada exitosamente' });
    } catch (error) {
        console.error('Error al eliminar la salida:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getAllSalidas,
    getSalidaById,
    createSalida,
    updateSalida,
    deleteSalida
};
