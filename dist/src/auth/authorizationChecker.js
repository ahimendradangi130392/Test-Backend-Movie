"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationChecker = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const logger_1 = require("../lib/logger");
const AuthService_1 = require("./AuthService");
function authorizationChecker(connection) {
    const log = new logger_1.Logger(__filename);
    const authService = typedi_1.Container.get(AuthService_1.AuthService);
    return function innerAuthorizationChecker(action, roles) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const authUser = yield authService.parseAuthFromRequest(action.request);
            if (authUser === undefined) {
                log.warn('Invalid credentials given');
                return false;
            }
            if (roles.length) {
                if (roles.includes(authUser.id)) {
                    action.request.user = authUser;
                    log.info(`Successfully checked credentials with Role ${authUser.id}`);
                    return true;
                }
                log.info(`AccessDeniedError for User<${authUser.id}>`);
                return false;
            }
            else {
                action.request.user = authUser;
                log.info('Successfully checked credentials');
                return true;
            }
        });
    };
}
exports.authorizationChecker = authorizationChecker;
//# sourceMappingURL=authorizationChecker.js.map