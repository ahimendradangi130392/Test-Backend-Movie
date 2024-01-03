"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerLoader = void 0;
const tslib_1 = require("tslib");
const storage_1 = require("class-transformer/storage");
const class_validator_1 = require("class-validator");
const class_validator_jsonschema_1 = require("class-validator-jsonschema");
const express_basic_auth_1 = tslib_1.__importDefault(require("express-basic-auth"));
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const swaggerUi = tslib_1.__importStar(require("swagger-ui-express"));
const env_1 = require("../env");
const swaggerLoader = (settings) => {
    if (settings && env_1.env.swagger.enabled) {
        const expressApp = settings.getData('express_app');
        const { validationMetadatas } = (0, class_validator_1.getFromContainer)(class_validator_1.MetadataStorage);
        const schemas = (0, class_validator_jsonschema_1.validationMetadatasToSchemas)(validationMetadatas, {
            classTransformerMetadataStorage: storage_1.defaultMetadataStorage,
            refPointerPrefix: '#/components/schemas/',
        });
        const swaggerFile = (0, routing_controllers_openapi_1.routingControllersToSpec)((0, routing_controllers_1.getMetadataArgsStorage)(), {}, {
            components: {
                schemas,
                securitySchemes: {
                    bearerAuth: {
                        type: 'http',
                        scheme: 'bearer',
                        bearerFormat: 'JWT',
                    },
                },
            },
        });
        // Add npm infos to the swagger doc
        swaggerFile.info = {
            title: env_1.env.app.name,
            description: env_1.env.app.description,
            version: env_1.env.app.version,
        };
        swaggerFile.servers = [
            {
                url: `${env_1.env.app.schema}://${env_1.env.app.host}${env_1.env.swagger.port ? (':' + env_1.env.swagger.port) : ''}${env_1.env.app.routePrefix}`,
            },
        ];
        // const ngrok = `c11eaebc.ngrok.io`;
        // const httpUrl = `https`;
        // swaggerFile.servers = [
        //     {
        //         url: `${httpUrl}://${ngrok}${env.app.routePrefix}`,
        //     },
        // ];
        expressApp.use(env_1.env.swagger.route, env_1.env.swagger.username ? (0, express_basic_auth_1.default)({
            users: {
                [`${env_1.env.swagger.username}`]: env_1.env.swagger.password,
            },
            challenge: true,
        }) : (req, res, next) => next(), swaggerUi.serve, swaggerUi.setup(swaggerFile));
    }
};
exports.swaggerLoader = swaggerLoader;
//# sourceMappingURL=swaggerLoader.js.map