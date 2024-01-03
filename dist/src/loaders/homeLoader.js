"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeLoader = void 0;
const tslib_1 = require("tslib");
const express_handlebars_1 = tslib_1.__importDefault(require("express-handlebars"));
const path_1 = tslib_1.__importDefault(require("path"));
const env_1 = require("../env");
const homeLoader = (settings) => {
    if (settings) {
        const expressApp = settings.getData('express_app');
        expressApp.engine('handlebars', (0, express_handlebars_1.default)());
        expressApp.set('view engine', 'handlebars');
        expressApp.set('views', path_1.default.resolve('src/views'));
        expressApp.get(env_1.env.app.routePrefix, (req, res) => {
            return res.json({
                name: env_1.env.app.name,
                version: env_1.env.app.version,
                description: env_1.env.app.description,
            });
        });
    }
};
exports.homeLoader = homeLoader;
//# sourceMappingURL=homeLoader.js.map