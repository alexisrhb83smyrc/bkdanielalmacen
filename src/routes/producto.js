const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto');

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Operaciones relacionadas con los productos
 */

/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Productos]
 *     responses:
 *       '200':
 *         description: Lista de productos obtenida correctamente
 */
router.get('/', productoController.getAllProductos);

/**
 * @swagger
 * /api/productos/{id}:
 *   get:
 *     summary: Obtener un producto por su ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Datos del producto obtenidos correctamente
 *       '404':
 *         description: Producto no encontrado
 */
router.get('/:id', productoController.getProductoById);

/**
 * @swagger
 * /api/productos:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del producto
 *               descripcion:
 *                 type: string
 *                 description: Descripción del producto
 *               precio:
 *                 type: number
 *                 format: double
 *                 description: Precio del producto
 *             required:
 *               - nombre
 *               - precio
 *     responses:
 *       '201':
 *         description: Producto creado exitosamente
 *       '400':
 *         description: Error en la solicitud
 */
router.post('/', productoController.createProducto);

/**
 * @swagger
 * /api/productos/{id}:
 *   put:
 *     summary: Actualizar un producto existente
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
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
 *               nombre:
 *                 type: string
 *                 description: Nombre del producto
 *               descripcion:
 *                 type: string
 *                 description: Descripción del producto
 *               precio:
 *                 type: number
 *                 format: double
 *                 description: Precio del producto
 *             required:
 *               - nombre
 *               - precio
 *     responses:
 *       '200':
 *         description: Producto actualizado exitosamente
 *       '400':
 *         description: Error en la solicitud
 *       '404':
 *         description: Producto no encontrado
 */
router.put('/:id', productoController.updateProducto);

/**
 * @swagger
 * /api/productos/{id}:
 *   delete:
 *     summary: Eliminar un producto existente
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Producto eliminado exitosamente
 *       '404':
 *         description: Producto no encontrado
 */
router.delete('/:id', productoController.deleteProducto);

module.exports = router;
