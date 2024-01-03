"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionModel = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const RoleModel_1 = require("./RoleModel");
let PermissionModel = class PermissionModel extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], PermissionModel.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: 'created_by_id' }),
    tslib_1.__metadata("design:type", Number)
], PermissionModel.prototype, "createdById", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: 'role_id' }),
    tslib_1.__metadata("design:type", Number)
], PermissionModel.prototype, "roleId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: 'module_id' }),
    tslib_1.__metadata("design:type", Number)
], PermissionModel.prototype, "moduleId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: 'is_create' }),
    tslib_1.__metadata("design:type", Boolean)
], PermissionModel.prototype, "isCreate", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ name: 'is_view' }),
    tslib_1.__metadata("design:type", Boolean)
], PermissionModel.prototype, "isView", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: 'my_view' }),
    tslib_1.__metadata("design:type", Boolean)
], PermissionModel.prototype, "myView", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ name: 'is_edit' }),
    tslib_1.__metadata("design:type", Boolean)
], PermissionModel.prototype, "isEdit", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ name: 'is_update' }),
    tslib_1.__metadata("design:type", Boolean)
], PermissionModel.prototype, "isUpdate", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ name: 'is_all' }),
    tslib_1.__metadata("design:type", Boolean)
], PermissionModel.prototype, "isAll", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, class_transformer_1.Exclude)({ toClassOnly: true }),
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    tslib_1.__metadata("design:type", Date)
], PermissionModel.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Exclude)({ toClassOnly: true }),
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    tslib_1.__metadata("design:type", Date)
], PermissionModel.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Exclude)({ toClassOnly: true }),
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    tslib_1.__metadata("design:type", Date)
], PermissionModel.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => RoleModel_1.RoleModel),
    (0, typeorm_1.OneToOne)(type => RoleModel_1.RoleModel, roleModel => roleModel.permission, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'role_id' }),
    tslib_1.__metadata("design:type", RoleModel_1.RoleModel)
], PermissionModel.prototype, "roleModel", void 0);
PermissionModel = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ name: 'permission' })
], PermissionModel);
exports.PermissionModel = PermissionModel;
//# sourceMappingURL=PermissionModel.js.map