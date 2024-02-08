# Implementación de una Base de Datos de Almacén

Este proyecto presenta una implementación de una base de datos de almacén que incluye las tablas de productos, entradas, salidas e inventario. Además, se crea una vista que muestra la relación entre los productos y la cantidad en inventario, junto con un procedimiento almacenado para actualizar el inventario.

---

## Generación del Script de Base de Datos

El script SQL proporcionado en este proyecto contiene todas las consultas necesarias para crear la estructura de la base de datos, incluyendo las tablas, vista y procedimiento almacenado.

**Para ejecutar el script:**
1. Asegúrese de tener un servidor de base de datos MySQL instalado y funcionando.
2. Ejecute el script SQL proporcionado en su servidor de base de datos para crear la base de datos y sus objetos.

---

## Diseño de la API con CRUD

Se diseñó una API RESTful que proporciona operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para las entradas y salidas del almacén. Esta API permite gestionar los productos, registrar las entradas y salidas de productos, y mantener actualizado el inventario.

**Para ejecutar la API:**
1. Instale las dependencias del proyecto utilizando `npm install`.
2. Inicie el servidor utilizando `node server.js`.

---

## Documentación con Swagger/OpenAPI

La documentación de la API se realizó utilizando Swagger/OpenAPI, lo que permite una fácil comprensión de los endpoints, parámetros y respuestas esperadas. La documentación estará disponible en la ruta especificada en el archivo.

---

## Despliegue y Funcionamiento

El despliegue de la aplicación se realiza siguiendo los estándares y prácticas habituales para la plataforma elegida. Una vez desplegada, la API estará lista para ser utilizada por los clientes. Se explicará el funcionamiento de la API y cómo interactuar con ella utilizando la documentación proporcionada.

**Para interactuar con la API:**
- Utilice la documentación Swagger para explorar los endpoints y enviar solicitudes a la API.

---

Se recomienda tener un archivo `.env` en la raíz del proyecto para almacenar las credenciales de la base de datos y cualquier otra configuración sensible. Asegúrese de que la ruta de la documentación de Swagger y otros recursos estén configurados correctamente en el proyecto.

Este proyecto proporciona una solución completa para la gestión de un almacén, desde la creación de la base de datos hasta la implementación de una API funcional y documentada.
