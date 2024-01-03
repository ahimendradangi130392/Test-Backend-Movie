"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenError = void 0;
const routing_controllers_1 = require("routing-controllers");
class RefreshTokenError extends routing_controllers_1.HttpError {
    constructor() {
        super(401, 'TOKEN.ERRORS.REFRESH_TOKEN_IS_NOT_CORRECT');
    }
}
exports.RefreshTokenError = RefreshTokenError;
//# sourceMappingURL=index.js.map