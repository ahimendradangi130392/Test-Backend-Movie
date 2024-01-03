"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const typedi_1 = require("typedi");
const ModuleService_1 = require("../services/ModuleService");
const Module_1 = require("./requests/Module");
const Module_2 = require("./respons/Module");
const Users_1 = require("../enums/Users");
const JwtService_1 = require("../../auth/JwtService");
const env_1 = require("../../env");
const class_validator_1 = require("class-validator");
let ModuleController = class ModuleController {
    constructor(moduleService, jwtService) {
        this.moduleService = moduleService;
        this.jwtService = jwtService;
    }
    allModuleInfo(res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.moduleService.allModuleInfo(res);
        });
    }
    moduleInfoById(id, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.moduleService.moduleInfoById(id, res);
        });
    }
    moduleCreateByAdmin(body, res, req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield (0, class_validator_1.validateOrReject)(body);
            let token = req.headers.authorization;
            token = token.replace('Bearer', '');
            token = token.trim();
            const decodedToken = yield this.jwtService.getIdByToken(token, env_1.env.jwt.secret);
            let id = decodedToken.userId;
            body.createdById = id;
            return yield this.moduleService.moduleCreateByAdmin(body, res);
        });
    }
    updateModuleByAdmin(body, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.moduleService.updateModuleByAdmin(body, res);
        });
    }
    deleteModuleByAdmin(id, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.moduleService.deleteModuleByAdmin(id, res);
        });
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Authorized)(Users_1.UserRoles.ADMIN),
    (0, routing_controllers_1.Get)('/'),
    (0, routing_controllers_openapi_1.ResponseSchema)(Module_1.ModuleRequest, {
        description: 'all module info',
        isArray: true
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Module_2.ModuleResponse]),
    tslib_1.__metadata("design:returntype", Promise)
], ModuleController.prototype, "allModuleInfo", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Get)('/:id'),
    (0, routing_controllers_openapi_1.ResponseSchema)(Module_1.ModuleRequest, {
        description: 'module info by id',
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Param)('id')),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Module_2.ModuleResponse]),
    tslib_1.__metadata("design:returntype", Promise)
], ModuleController.prototype, "moduleInfoById", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Authorized)(Users_1.UserRoles.ADMIN),
    (0, routing_controllers_1.Post)('/'),
    (0, routing_controllers_openapi_1.ResponseSchema)(Module_1.ModuleRequest, {
        description: 'create module by admin',
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__param(2, (0, routing_controllers_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Module_1.ModuleRequest, Module_2.ModuleResponse, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ModuleController.prototype, "moduleCreateByAdmin", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Authorized)(Users_1.UserRoles.ADMIN),
    (0, routing_controllers_1.Patch)('/'),
    (0, routing_controllers_openapi_1.ResponseSchema)(Module_2.ModuleResponse, {
        description: 'update module by admin',
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Module_2.ModuleResponse, Module_2.ModuleResponse]),
    tslib_1.__metadata("design:returntype", Promise)
], ModuleController.prototype, "updateModuleByAdmin", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Authorized)(Users_1.UserRoles.ADMIN),
    (0, routing_controllers_1.Delete)('/:id'),
    (0, routing_controllers_openapi_1.ResponseSchema)(Module_1.ModuleRequest, {
        description: 'delete module by admin',
    }),
    tslib_1.__param(0, (0, routing_controllers_1.Param)('id')),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Module_2.ModuleResponse]),
    tslib_1.__metadata("design:returntype", Promise)
], ModuleController.prototype, "deleteModuleByAdmin", null);
ModuleController = tslib_1.__decorate([
    (0, routing_controllers_openapi_1.OpenAPI)({ security: [{ bearerAuth: [] }] }),
    (0, routing_controllers_1.JsonController)('/module'),
    tslib_1.__param(0, (0, typedi_1.Service)()),
    tslib_1.__param(1, (0, typedi_1.Service)()),
    tslib_1.__metadata("design:paramtypes", [ModuleService_1.ModuleService,
        JwtService_1.JwtService])
], ModuleController);
exports.ModuleController = ModuleController;
//# sourceMappingURL=ModuleController.js.map