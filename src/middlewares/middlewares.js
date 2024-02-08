const express = require('express');
const path = require('path');
const {specs, swaggerUi} = require('../config/swagger.js');

class MiddlewareConfig {
    constructor(app) {
        this.app = app;
        this.route_public = path.join(__dirname, '../../public')
    }

    configure() {
        this._express();
        this._swagger();
        this._serveStaticFiles();
        this._setViewEngine();
    }

    _express() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    _swagger() {
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
    }

    _serveStaticFiles() {
        this.app.use(express.static(this.route_public));
    }

    _setViewEngine() {
        this.app.set('views', path.join(this.route_public, 'views'));
        this.app.set('view engine', 'ejs');
    }

}

module.exports = MiddlewareConfig;
