-- Crear la base de datos
CREATE DATABASE almacen;

-- Usar la base de datos
USE almacen;

-- Crear la tabla de productos
CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255),
    precio DECIMAL(10, 2) NOT NULL
);

-- Crear la tabla de entradas
CREATE TABLE entradas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    producto_id INT,
    cantidad INT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- Crear la tabla de salidas
CREATE TABLE salidas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    producto_id INT,
    cantidad INT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- Crear la tabla de inventario
CREATE TABLE inventario (
    producto_id INT PRIMARY KEY,
    cantidad INT,
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- Crear la vista entre la tabla de inventario y productos
CREATE VIEW vista_inventario_productos AS
SELECT p.id AS producto_id, p.nombre, p.descripcion, p.precio, i.cantidad AS cantidad_en_inventario
FROM productos p
JOIN inventario i ON p.id = i.producto_id;

-- Crear el stored procedure para actualizar el inventario
DELIMITER //
CREATE PROCEDURE actualizar_inventario(IN producto_id INT, IN cantidad INT)
BEGIN
    DECLARE cantidad_actual INT;
    SELECT cantidad INTO cantidad_actual FROM inventario WHERE producto_id = producto_id;
    IF cantidad_actual IS NOT NULL THEN
        UPDATE inventario SET cantidad = cantidad WHERE producto_id = producto_id;
    ELSE
        INSERT INTO inventario (producto_id, cantidad) VALUES (producto_id, cantidad);
    END IF;
END //
DELIMITER ;
