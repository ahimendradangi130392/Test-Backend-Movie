"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const typedi_1 = require("typedi");
const RoleService_1 = require("../services/RoleService");
const Role_1 = require("./requests/Role");
const Role_2 = require("./respons/Role");
const Users_1 = require("../enums/Users");
const JwtService_1 = require("../../auth/JwtService");
const env_1 = require("../../env");
const class_validator_1 = require("class-validator");
const Permission_1 = require("./requests/Permission");
const Permission_2 = require("./respons/Permission");
let RoleController = class RoleController {
    constructor(roleService, jwtService) {
        this.roleService = roleService;
        this.jwtService = jwtService;
    }
    getAllRoleInfo(res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.roleService.getAllRoleInfo(res);
        });
    }
    getRoleInfoById(id, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.roleService.getRoleInfoById(id, res);
        });
    }
    createRoleByAdmin(body, res, req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield (0, class_validator_1.validateOrReject)(body);
            let token = req.headers.authorization;
            token = token.replace('Bearer', '');
            token = token.trim();
            const decodedToken = yield this.jwtService.getIdByToken(token, env_1.env.jwt.secret);
            let id = decodedToken.userId;
            body.createdById = id;
            return yield this.roleService.createRoleByAdmin(body, res);
        });
    }
    updatePermissionByAdmin(body, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.roleService.updatePermissionByAdmin(body, res);
        });
    }
    updateRoleByAdmin(body, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.roleService.updateRoleByAdmin(body, res);
        });
    }
    deleteRoleByAdmin(id, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.roleService.deleteRoleByAdmin(id, res);
        });
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Authorized)(Users_1.UserRoles.ADMIN),
    (0, routing_controllers_1.Get)('/'),
    (0, routing_controllers_openapi_1.ResponseSchema)(Role_1.RoleRequest, {
        description: 'get all role info list ',
        isArray: true
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Role_2.RoleResponse]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "getAllRoleInfo", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Get)('/:id'),
    (0, routing_controllers_openapi_1.ResponseSchema)(Role_1.RoleRequest, {
        description: 'get role info by id',
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Param)('id')),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Role_2.RoleResponse]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "getRoleInfoById", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Authorized)(Users_1.UserRoles.ADMIN),
    (0, routing_controllers_1.Post)('/'),
    (0, routing_controllers_openapi_1.ResponseSchema)('', {
        description: 'create role by admin',
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__param(2, (0, routing_controllers_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Role_1.RoleRequest, Role_2.RoleResponse, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "createRoleByAdmin", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Authorized)(Users_1.UserRoles.ADMIN),
    (0, routing_controllers_1.Patch)('/permission'),
    (0, routing_controllers_openapi_1.ResponseSchema)(Permission_2.PermissionResponse, {
        description: 'update permission by admin ',
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Permission_1.PermissionRequest, Permission_2.PermissionResponse]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "updatePermissionByAdmin", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Authorized)(Users_1.UserRoles.ADMIN),
    (0, routing_controllers_1.Patch)('/'),
    (0, routing_controllers_openapi_1.ResponseSchema)(Role_2.RoleResponse, {
        description: 'update role by admin ',
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Role_2.RoleResponse, Role_2.RoleResponse]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "updateRoleByAdmin", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Authorized)(Users_1.UserRoles.ADMIN),
    (0, routing_controllers_1.Delete)('/:id'),
    (0, routing_controllers_openapi_1.ResponseSchema)(Role_1.RoleRequest, {
        description: 'delete role by admin',
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Param)('id')),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Role_2.RoleResponse]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "deleteRoleByAdmin", null);
RoleController = tslib_1.__decorate([
    (0, routing_controllers_openapi_1.OpenAPI)({ security: [{ bearerAuth: [] }] }),
    (0, routing_controllers_1.JsonController)('/role'),
    tslib_1.__param(0, (0, typedi_1.Service)()),
    tslib_1.__param(1, (0, typedi_1.Service)()),
    tslib_1.__metadata("design:paramtypes", [RoleService_1.RoleService,
        JwtService_1.JwtService])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=RoleController.js.map