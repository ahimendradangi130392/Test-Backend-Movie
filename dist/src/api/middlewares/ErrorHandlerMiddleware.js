"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlerMiddleware = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const Logger_1 = require("../../decorators/Logger");
const env_1 = require("../../env");
let ErrorHandlerMiddleware = class ErrorHandlerMiddleware {
    constructor(log) {
        this.log = log;
        this.isProduction = env_1.env.isProduction;
    }
    error(error, req, res, next) {
        var _a, _b, _c;
        res.status(error.httpCode || 400);
        res.json({
            name: (_a = error[0]) === null || _a === void 0 ? void 0 : _a.property,
            message: ((_b = error[0]) === null || _b === void 0 ? void 0 : _b.constraints) ? (_c = error[0]) === null || _c === void 0 ? void 0 : _c.constraints : error === null || error === void 0 ? void 0 : error.message,
            errors: error[`errors`] || [],
        });
        if (this.isProduction) {
            this.log.error(error.name, error.message);
        }
        else {
            this.log.error(error.name, error.stack);
        }
    }
};
ErrorHandlerMiddleware = tslib_1.__decorate([
    (0, routing_controllers_1.Middleware)({ type: 'after' }),
    tslib_1.__param(0, (0, Logger_1.Logger)(__filename)),
    tslib_1.__metadata("design:paramtypes", [Object])
], ErrorHandlerMiddleware);
exports.ErrorHandlerMiddleware = ErrorHandlerMiddleware;
//# sourceMappingURL=ErrorHandlerMiddleware.js.map