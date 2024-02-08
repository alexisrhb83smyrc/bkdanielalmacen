const express = require('express');
const router = express.Router();
const salidaController = require('../controllers/salida');

/**
 * @swagger
 * tags:
 *   name: Salidas
 *   description: Operaciones relacionadas con las salidas
 */

/**
 * @swagger
 * /api/salidas:
 *   get:
 *     summary: Obtener todas las salidas
 *     tags: [Salidas]
 *     responses:
 *       '200':
 *         description: Lista de salidas obtenida correctamente
 */
router.get('/', salidaController.getAllSalidas);

/**
 * @swagger
 * /api/salidas/{id}:
 *   get:
 *     summary: Obtener una salida por su ID
 *     tags: [Salidas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la salida
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Datos de la salida obtenidos correctamente
 *       '404':
 *         description: Salida no encontrada
 */
router.get('/:id', salidaController.getSalidaById);

/**
 * @swagger
 * /api/salidas:
 *   post:
 *     summary: Crear una nueva salida
 *     tags: [Salidas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               producto_id:
 *                 type: integer
 *                 description: ID del producto asociado a la salida
 *               cantidad:
 *                 type: integer
 *                 description: Cantidad de productos
 *               fecha:
 *                 type: string
 *                 format: date-time
 *                 description: Fecha de la salida (formato YYYY-MM-DD HH:MM:SS)
 *             required:
 *               - producto_id
 *               - cantidad
 *               - fecha
 *     responses:
 *       '201':
 *         description: Salida creada exitosamente
 *       '400':
 *         description: Error en la solicitud
 */
router.post('/', salidaController.createSalida);

/**
 * @swagger
 * /api/salidas/{id}:
 *   put:
 *     summary: Actualizar una salida existente
 *     tags: [Salidas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la salida
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
 *                 description: Fecha de la salida (formato YYYY-MM-DD HH:MM:SS)
 *             required:
 *               - producto_id
 *               - cantidad
 *               - fecha
 *     responses:
 *       '200':
 *         description: Salida actualizada exitosamente
 *       '400':
 *         description: Error en la solicitud
 *       '404':
 *         description: Salida no encontrada
 */
router.put('/:id', salidaController.updateSalida);

/**
 * @swagger
 * /api/salidas/{id}:
 *   delete:
 *     summary: Eliminar una salida existente
 *     tags: [Salidas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la salida
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Salida eliminada exitosamente
 *       '404':
 *         description: Salida no encontrada
 */
router.delete('/:id', salidaController.deleteSalida);

module.exports = router;
