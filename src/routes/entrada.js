const express = require('express');
const router = express.Router();
const entradaController = require('../controllers/entrada');

/**
 * @swagger
 * tags:
 *   name: Entradas
 *   description: Operaciones relacionadas con las entradas
 */

/**
 * @swagger
 * /api/entradas:
 *   get:
 *     summary: Obtener todas las entradas
 *     tags: [Entradas]
 *     responses:
 *       '200':
 *         description: Lista de entradas obtenida correctamente
 */
router.get('/', entradaController.getAllEntradas);

/**
 * @swagger
 * /api/entradas/{id}:
 *   get:
 *     summary: Obtener una entrada por su ID
 *     tags: [Entradas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la entrada
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Datos de la entrada obtenidos correctamente
 *       '404':
 *         description: Entrada no encontrada
 */
router.get('/:id', entradaController.getEntradaById);

/**
 * @swagger
 * /api/entradas:
 *   post:
 *     summary: Crear una nueva entrada
 *     tags: [Entradas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               producto_id:
 *                 type: integer
 *                 description: ID del producto asociado a la entrada
 *               cantidad:
 *                 type: integer
 *                 description: Cantidad de productos
 *               fecha:
 *                 type: string
 *                 format: date-time
 *                 description: Fecha de la entrada (formato YYYY-MM-DD HH:MM:SS)
 *             required:
 *               - producto_id
 *               - cantidad
 *               - fecha
 *     responses:
 *       '201':
 *         description: Entrada creada exitosamente
 *       '400':
 *         description: Error en la solicitud
 */
router.post('/', entradaController.createEntrada);

/**
 * @swagger
 * /api/entradas/{id}:
 *   put:
 *     summary: Actualizar una entrada existente
 *     tags: [Entradas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la entrada
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad:
 *                 type: integer
 *                 description: Cantidad de productos
 *               fecha:
 *                 type: string
 *                 format: date-time
 *                 description: Fecha de la entrada (formato ISO 8601)
 *             required:
 *               - cantidad
 *               - fecha
 *     responses:
 *       '200':
 *         description: Entrada actualizada exitosamente
 *       '400':
 *         description: Error en la solicitud
 *       '404':
 *         description: Entrada no encontrada
 */
router.put('/:id', entradaController.updateEntrada);

/**
 * @swagger
 * /api/entradas/{id}:
 *   delete:
 *     summary: Eliminar una entrada existente
 *     tags: [Entradas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la entrada
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Entrada eliminada exitosamente
 *       '404':
 *         description: Entrada no encontrada
 */
router.delete('/:id', entradaController.deleteEntrada);

module.exports = router;
