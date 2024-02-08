const Entrada = require('../models/Entrada');

const getAllEntradas = async () => {
    return await Entrada.getAll();
};

const getEntradaById = async (entradaId) => {
    return await Entrada.getById(entradaId);
};

const createEntrada = async (producto_id, cantidad, fecha) => {
    const nuevaEntrada = new Entrada(null, producto_id, cantidad, fecha);
    await nuevaEntrada.save();
    return nuevaEntrada;
};

const updateEntrada = async (entradaId, producto_id, cantidad, fecha) => {
    const entrada = new Entrada(entradaId, producto_id, cantidad, fecha);
    await entrada.update();
    return entrada;
};

const deleteEntrada = async (entradaId) => {
    await Entrada.deleteById(entradaId);
};

module.exports = {
    getAllEntradas,
    getEntradaById,
    createEntrada,
    updateEntrada,
    deleteEntrada,
};
