"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const tslib_1 = require("tslib");
const jwt = tslib_1.__importStar(require("jsonwebtoken"));
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const env_1 = require("../env");
const AdminRepository_1 = require("../api/repositories/AdminRepository");
let JwtService = class JwtService {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    signJwt(user) {
        return jwt.sign({ userId: user.id }, env_1.env.jwt.secret);
    }
    signRefreshJwt(user) {
        return jwt.sign({ userId: user.id }, env_1.env.jwt.secretRefresh);
    }
    decode(token, secretKey) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const decoded = jwt.verify(token, secretKey);
            let user = yield this.adminRepository.findOne({
                where: {
                    id: decoded.userId,
                },
            });
            if (user) {
                return user;
            }
            return undefined;
            ;
        });
    }
    getIdByToken(token, secretKey) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const decoded = jwt.verify(token, secretKey);
            if (decoded) {
                return decoded;
            }
            return undefined;
        });
    }
};
JwtService = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typeorm_typedi_extensions_1.OrmRepository)()),
    tslib_1.__metadata("design:paramtypes", [AdminRepository_1.AdminRepository])
], JwtService);
exports.JwtService = JwtService;
//# sourceMappingURL=JwtService.js.map