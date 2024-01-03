"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const User_1 = require("../api/errors/User");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const JwtService_1 = require("./JwtService");
const Logger_1 = require("../decorators/Logger");
const env_1 = require("../env");
const AdminService_1 = require("../api/services/AdminService");
const AdminRepository_1 = require("../api/repositories/AdminRepository");
const AdminModel_1 = require("../api/models/AdminModel");
let AuthService = class AuthService {
    constructor(log, adminRepository, jwtService, adminService) {
        this.log = log;
        this.adminRepository = adminRepository;
        this.jwtService = jwtService;
        this.adminService = adminService;
    }
    parseAuthFromRequest(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const authorization = req.header('Authorization');
            if (authorization && authorization.split(' ')[0] === 'Bearer') {
                const decoded = yield this.jwtService.decode(authorization.split(' ')[1], env_1.env.jwt.secret);
                this.log.info('Credentials provided by the client', decoded, authorization);
                return decoded;
            }
            if (req.query && req.query.authToken && typeof req.query.authToken === 'string') {
                const decoded = yield this.jwtService.decode(req.query.authToken, env_1.env.jwt.secret);
                this.log.info('Credentials provided by the client in params', decoded, authorization);
                return decoded;
            }
            this.log.info('No credentials provided by the client', authorization);
            return undefined;
        });
    }
    login(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const dbUser = yield this.adminRepository.findOne({ email: username });
            if (dbUser) {
                const isCorrectPassword = yield AdminModel_1.AdminModel.comparePassword(dbUser, password);
                if (isCorrectPassword) {
                    const token = this.jwtService.signJwt(dbUser);
                    const refreshToken = this.jwtService.signRefreshJwt(dbUser);
                    return Object.assign(Object.assign({}, (0, class_transformer_1.classToPlain)(yield this.adminService.getAdminInformation(dbUser.id))), { token,
                        refreshToken, message: 'MESSAGES.USER.LOGIN_SUCCESS' });
                }
            }
            return {
                is_error: true,
            };
        });
    }
    checkRefresh(refreshToken) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.jwtService.decode(refreshToken, env_1.env.jwt.secretRefresh);
            if (!user) {
                throw new User_1.RefreshTokenError();
            }
            else {
                return {
                    token: this.jwtService.signJwt(user),
                    refreshToken: this.jwtService.signRefreshJwt(user),
                };
            }
        });
    }
};
AuthService = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, Logger_1.Logger)(__filename)),
    tslib_1.__param(1, (0, typeorm_typedi_extensions_1.OrmRepository)()),
    tslib_1.__param(2, (0, typedi_1.Service)()),
    tslib_1.__param(3, (0, typedi_1.Service)()),
    tslib_1.__metadata("design:paramtypes", [Object, AdminRepository_1.AdminRepository,
        JwtService_1.JwtService,
        AdminService_1.AdminService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map