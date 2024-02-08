const entradaRoutes = require('./entrada');
const productoRoutes = require('./producto');
const salidaRoutes = require('./salida')
const inventarioRoutes = require('./inventario')

class RouteConfig {
    constructor(app) {
        this.app = app;
    }

    configure() {
        this._homeRoute();
        this._entradaRoutes();
        this._productoRoutes();
        this._salidaRoutes();
        this._inventarioRoutes();
    }

    _homeRoute() {
        this.app.get('/', (req, res) => {
            res.render('index.ejs');
        });
    }

    _entradaRoutes() {
        this.app.use('/api/entradas', entradaRoutes);
    }

    _productoRoutes() {
        this.app.use('/api/productos', productoRoutes)
    }

    _salidaRoutes() {
        this.app.use('/api/salidas', salidaRoutes)
    }

    _inventarioRoutes() {
        this.app.use('/api/inventario', inventarioRoutes)
    }
}

module.exports = RouteConfig;