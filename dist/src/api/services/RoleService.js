"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const RoleRepository_1 = require("../repositories/RoleRepository");
const Logger_1 = require("../../decorators/Logger");
const PermissionRepository_1 = require("../repositories/PermissionRepository");
const ModuleRepository_1 = require("../repositories/ModuleRepository");
let RoleService = class RoleService {
    constructor(log, roleRepository, permissionRepository, moduleRepository) {
        this.log = log;
        this.roleRepository = roleRepository;
        this.permissionRepository = permissionRepository;
        this.moduleRepository = moduleRepository;
    }
    /*  ------------------get all role info ---------------  */
    getAllRoleInfo(res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`get all role info`);
            try {
                return yield this.roleRepository.find();
            }
            catch (error) {
                return res.status(400).send({ success: false, error: error });
            }
        });
    }
    /*  ------------------get role info by id---------------  */
    getRoleInfoById(id, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`get information by id`);
            const roleData = yield this.roleRepository.getRoleInfoById(id, res);
            const moduleData = yield this.moduleRepository.find();
            const allData = { "roleData": roleData, "moduleData": moduleData };
            return allData;
        });
    }
    /*  ------------------create role---------------  */
    createRoleByAdmin(body, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`create role`);
            try {
                const roleData = yield this.roleRepository.save(body);
                const moduleData = yield this.moduleRepository.find();
                yield Promise.all(moduleData.map((ele) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const permissionData = { "createdById": roleData.createdById, "roleId": roleData.id, "moduleId": ele.id };
                    yield this.permissionRepository.save(permissionData);
                })));
                return res.status(200).send({ success: true, msg: 'SUCCESSFULLY_REGISTER' });
            }
            catch (error) {
                return res.status(400).send({ success: false, error: error });
            }
        });
    }
    /*  ------------------update user role---------------  */
    updateRoleByAdmin(updateBody, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Update role`);
            try {
                const adminToUpdate = yield this.roleRepository.findOne(updateBody === null || updateBody === void 0 ? void 0 : updateBody.id);
                if (adminToUpdate) {
                    adminToUpdate.name = updateBody.name;
                    return yield this.roleRepository.save(adminToUpdate);
                }
                return res.status(400).send({ success: false, error: 'USER_NOT_FOUND  ' });
            }
            catch (error) {
                return res.status(400).send({ success: false, error: error });
            }
        });
    }
    /*  ------------------update permission by admin---------------  */
    updatePermissionByAdmin(body, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Update permission by admin`);
            try {
                const permissionData = yield this.permissionRepository.findOne({ roleId: body === null || body === void 0 ? void 0 : body.roleId, moduleId: body === null || body === void 0 ? void 0 : body.moduleId });
                permissionData.isCreate = body.isCreate;
                permissionData.isEdit = body.isEdit;
                permissionData.isUpdate = body.isUpdate;
                permissionData.isAll = body.isAll;
                return yield this.permissionRepository.save(permissionData);
            }
            catch (error) {
                return res.status(400).send({ success: false, error: error });
            }
        });
    }
    /*  ------------------delete role by admin ---------------  */
    deleteRoleByAdmin(id, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Delete role by admin`);
            try {
                return yield this.roleRepository.softDelete(id);
            }
            catch (error) {
                return res.status(400).send({ success: false, error: error });
            }
        });
    }
};
RoleService = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, Logger_1.Logger)(__filename)),
    tslib_1.__param(1, (0, typeorm_typedi_extensions_1.OrmRepository)()),
    tslib_1.__param(2, (0, typeorm_typedi_extensions_1.OrmRepository)()),
    tslib_1.__param(3, (0, typeorm_typedi_extensions_1.OrmRepository)()),
    tslib_1.__metadata("design:paramtypes", [Object, RoleRepository_1.RoleRepository,
        PermissionRepository_1.PermissionRepository,
        ModuleRepository_1.ModuleRepository])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=RoleService.js.map