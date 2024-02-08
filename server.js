const AppConfig = require('./src/config/app.js');

const appConfig = new AppConfig();
appConfig.configureMiddlewares();
appConfig.configureRoutes();
appConfig.listen();