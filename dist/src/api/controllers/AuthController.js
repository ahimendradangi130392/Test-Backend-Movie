"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const AuthService_1 = require("../../auth/AuthService");
const User_1 = require("./requests/User");
const User_2 = require("./respons/User");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    login(body, req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const dbUser = yield this.authService.login(body.username, body.password);
            if (dbUser.is_error) {
                return res.status(400).send({
                    success: false, error: dbUser.message ||
                        'MESSAGES.USER.INVALID_LOGIN', ipAddress: req.headers['x-forwarded-for'] || req.ip,
                });
            }
            return Object.assign(Object.assign({}, dbUser), { ipAddress: req.headers['x-forwarded-for'] || req.ip });
        });
    }
    refreshToken(body, req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newTokenPair = yield this.authService.checkRefresh(body.refreshToken);
            return newTokenPair;
        });
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Post)('/login'),
    (0, routing_controllers_openapi_1.ResponseSchema)(User_2.UserResponse, {
        description: 'User login with username/password',
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__param(1, (0, routing_controllers_1.Req)()),
    tslib_1.__param(2, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.LoginRequest, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)('/refreshtoken'),
    (0, routing_controllers_openapi_1.ResponseSchema)(User_2.UserResponse, {
        description: 'Refresh auth token',
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__param(1, (0, routing_controllers_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.RefreshTokenRequest, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
AuthController = tslib_1.__decorate([
    (0, routing_controllers_1.JsonController)('/auth'),
    (0, routing_controllers_openapi_1.OpenAPI)({ security: [{ bearerAuth: [] }] }),
    tslib_1.__metadata("design:paramtypes", [AuthService_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=AuthController.js.map