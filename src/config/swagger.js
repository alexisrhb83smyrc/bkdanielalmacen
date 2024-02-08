const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Documentación de la API de ejemplo',
        },
        servers: [
            {
                url: 'http://localhost:3000', // Cambia la URL según sea necesario
                description: 'Servidor local',
            },
        ],
    },
    apis: ['./src/routes/*.js'], // Ruta de los archivos que contienen las definiciones de las rutas
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
