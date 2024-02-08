const express = require('express');
const MiddlewareConfig = require('../middlewares/middlewares.js');
const RouteConfig = require('../routes/index')


class AppConfig {
    constructor(port = 3000) {
        this.app = express();
        this.port = port;
    }

    configureMiddlewares() {
        const middlewareConfig = new MiddlewareConfig(this.app)
        middlewareConfig.configure()
    }

    configureRoutes() {
        const routeConfig = new RouteConfig(this.app);
        routeConfig.configure();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = AppConfig;