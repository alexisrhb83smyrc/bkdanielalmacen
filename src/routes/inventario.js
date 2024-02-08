const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventario');

/**
 * @swagger
 * tags:
 *   name: Inventario
 *   description: Operaciones relacionadas con el inventario
 */

/**
 * @swagger
 * /api/inventario:
 *   get:
 *     summary: Obtener todo el inventario
 *     tags: [Inventario]
 *     responses:
 *       '200':
 *         description: Lista de inventario obtenida correctamente
 */
router.get('/', inventarioController.getAllInventario);

/**
 * @swagger
 * /api/inventario/{producto_id}:
 *   get:
 *     summary: Obtener el inventario de un producto por su ID
 *     tags: [Inventario]
 *     parameters:
 *       - in: path
 *         name: producto_id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Datos del inventario obtenidos correctamente
 *       '404':
 *         description: Producto no encontrado en el inventario
 */
router.get('/:producto_id', inventarioController.getInventarioByProductId);

/**
 * @swagger
 * /api/inventario:
 *   post:
 *     summary: Agregar un nuevo producto al inventario
 *     tags: [Inventario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               producto_id:
 *                 type: integer
 *                 description: ID del producto a agregar al inventario
 *               cantidad:
 *                 type: integer
 *                 description: Cantidad de productos a agregar
 *             required:
 *               - producto_id
 *               - cantidad
 *     responses:
 *       '201':
 *         description: Producto agregado al inventario correctamente
 *       '400':
 *         description: Error en la solicitud
 */
router.post('/', inventarioController.createInventario);

/**
 * @swagger
 * /api/inventario/{producto_id}:
 *   put:
 *     summary: Actualizar la cantidad de un producto en el inventario
 *     tags: [Inventario]
 *     parameters:
 *       - in: path
 *         name: producto_id
 *         required: true
 *         description: ID del producto
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
 *                 description: Nueva cantidad de productos en el inventario
 *             required:
 *               - cantidad
 *     responses:
 *       '200':
 *         description: Cantidad de producto en el inventario actualizada correctamente
 *       '400':
 *         description: Error en la solicitud
 *       '404':
 *         description: Producto no encontrado en el inventario
 */
router.put('/:producto_id', inventarioController.updateInventario);

/**
 * @swagger
 * /api/inventario/{producto_id}:
 *   delete:
 *     summary: Eliminar un producto del inventario
 *     tags: [Inventario]
 *     parameters:
 *       - in: path
 *         name: producto_id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Producto eliminado del inventario correctamente
 *       '404':
 *         description: Producto no encontrado en el inventario
 */
router.delete('/:producto_id', inventarioController.deleteInventario);

module.exports = router;
