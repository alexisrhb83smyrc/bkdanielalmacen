const Salida = require('../models/Salida');

const getAllSalidas = async () => {
    return await Salida.getAll();
};

const getSalidaById = async (salidaId) => {
    return await Salida.getById(salidaId);
};

const createSalida = async (producto_id, cantidad, fecha) => {
    const nuevaSalida = new Salida(null, producto_id, cantidad, fecha);
    return await nuevaSalida.save();
};

const updateSalida = async (salidaId, producto_id, cantidad, fecha) => {
    const salida = new Salida(salidaId, producto_id, cantidad, fecha);
    return await salida.update();
};

const deleteSalida = async (salidaId) => {
    await Salida.deleteById(salidaId);
};

module.exports = {
    getAllSalidas,
    getSalidaById,
    createSalida,
    updateSalida,
    deleteSalida
};
