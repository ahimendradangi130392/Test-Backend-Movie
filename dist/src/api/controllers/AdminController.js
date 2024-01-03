"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const typedi_1 = require("typedi");
const AdminService_1 = require("../services/AdminService");
const Admin_1 = require("./requests/Admin");
const Admin_2 = require("./respons/Admin");
const JwtService_1 = require("../../auth/JwtService");
const env_1 = require("../../env");
const Users_1 = require("../enums/Users");
const class_validator_1 = require("class-validator");
let AdminController = class AdminController {
    constructor(adminService, jwtService) {
        this.adminService = adminService;
        this.jwtService = jwtService;
    }
    allUserInfo(params, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.adminService.allUserInfo(params, res);
        });
    }
    userInfoById(id, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.adminService.userInfoById(id, res);
        });
    }
    createUser(body, res, req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield (0, class_validator_1.validateOrReject)(body);
            let token = req.headers.authorization;
            token = token.replace('Bearer', '');
            token = token.trim();
            const decodedToken = yield this.jwtService.getIdByToken(token, env_1.env.jwt.secret);
            let id = decodedToken.userId;
            body.createdById = id;
            return yield this.adminService.createUser(body, res);
        });
    }
    updateUser(body, res, req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.adminService.updateUser(body, res);
        });
    }
    deleteUser(id, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.adminService.deleteUser(id, res);
        });
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Authorized)(Users_1.UserRoles.ADMIN),
    (0, routing_controllers_1.Get)('/'),
    (0, routing_controllers_openapi_1.ResponseSchema)(Admin_1.AdminReq, {
        description: 'all user',
        isArray: true
    }),
    tslib_1.__param(0, (0, routing_controllers_1.QueryParams)()),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Admin_2.AdminRes]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "allUserInfo", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Get)('/:id'),
    (0, routing_controllers_openapi_1.ResponseSchema)(Admin_1.AdminReq, {
        description: 'user info by id',
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Param)('id')),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Admin_2.AdminRes]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "userInfoById", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Authorized)(Users_1.UserRoles.ADMIN),
    (0, routing_controllers_1.Post)('/'),
    (0, routing_controllers_openapi_1.ResponseSchema)(Admin_1.AdminReq, {
        description: 'create user',
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__param(2, (0, routing_controllers_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Admin_1.AdminReq, Admin_2.AdminRes, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "createUser", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Authorized)(Users_1.UserRoles.ADMIN),
    (0, routing_controllers_1.Patch)('/'),
    (0, routing_controllers_openapi_1.ResponseSchema)(Admin_1.AdminReq, {
        description: 'update user by admin',
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__param(2, (0, routing_controllers_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Admin_2.AdminRes, Admin_2.AdminRes, Admin_1.AdminReq]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "updateUser", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Authorized)(Users_1.UserRoles.ADMIN),
    (0, routing_controllers_1.Delete)('/:id'),
    (0, routing_controllers_openapi_1.ResponseSchema)(Admin_1.AdminReq, {
        description: 'delete user by admin',
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Param)('id')),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Admin_2.AdminRes]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "deleteUser", null);
AdminController = tslib_1.__decorate([
    (0, routing_controllers_openapi_1.OpenAPI)({ security: [{ bearerAuth: [] }] }),
    (0, routing_controllers_1.JsonController)('/admin'),
    tslib_1.__param(0, (0, typedi_1.Service)()),
    tslib_1.__param(1, (0, typedi_1.Service)()),
    tslib_1.__metadata("design:paramtypes", [AdminService_1.AdminService,
        JwtService_1.JwtService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=AdminController.js.map