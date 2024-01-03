"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressLoader = void 0;
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const routing_controllers_1 = require("routing-controllers");
// import { SaleOrderEmailService } from '../api/services/SaleOrderEmailService';
// import { Container } from 'typedi';
const authorizationChecker_1 = require("../auth/authorizationChecker");
const currentUserChecker_1 = require("../auth/currentUserChecker");
const env_1 = require("../env");
const expressLoader = (settings) => {
    if (settings) {
        const connection = settings.getData('connection');
        /**
         * We create a new express server instance.
         * We could have also use useExpressServer here to attach controllers to an existing express instance.
         */
        const expressApp = (0, express_1.default)();
        expressApp.use(express_1.default.json({ limit: '50mb' }));
        expressApp.use(express_1.default.urlencoded({
            limit: '50mb',
            extended: true,
            parameterLimit: 50000,
        }));
        (0, routing_controllers_1.useExpressServer)(expressApp, {
            cors: true,
            classTransformer: true,
            routePrefix: env_1.env.app.routePrefix,
            defaultErrorHandler: false,
            /**
             * We can add options about how routing-controllers should configure itself.
             * Here we specify what controllers should be registered in our express server.
             */
            controllers: env_1.env.app.dirs.controllers,
            middlewares: env_1.env.app.dirs.middlewares,
            interceptors: env_1.env.app.dirs.interceptors,
            /**
             * Authorization features
             */
            authorizationChecker: (0, authorizationChecker_1.authorizationChecker)(connection),
            currentUserChecker: (0, currentUserChecker_1.currentUserChecker)(connection),
        });
        // Run application to listen on given port
        if (!env_1.env.isTest) {
            // TO DO - NEED TO RELEASE ONCE FIND THE WAY HOW TO PARSE EMAIL AUTOMATICALLY WITHOUT CRON
            // const saleOrderEmailServices: SaleOrderEmailService = Container.get(SaleOrderEmailService);
            // saleOrderEmailServices.parseEmail();
            const server = expressApp.listen(env_1.env.app.port);
            settings.setData('express_server', server);
        }
        // Here we can set the data for other loaders
        settings.setData('express_app', expressApp);
    }
};
exports.expressLoader = expressLoader;
//# sourceMappingURL=expressLoader.js.map