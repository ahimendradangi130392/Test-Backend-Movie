"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModel = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const PermissionModel_1 = require("./PermissionModel");
let RoleModel = class RoleModel extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], RoleModel.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ name: 'created_by_id' }),
    tslib_1.__metadata("design:type", Number)
], RoleModel.prototype, "createdById", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ name: 'name' }),
    tslib_1.__metadata("design:type", String)
], RoleModel.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, class_transformer_1.Exclude)({ toClassOnly: true }),
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    tslib_1.__metadata("design:type", Date)
], RoleModel.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Exclude)({ toClassOnly: true }),
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    tslib_1.__metadata("design:type", Date)
], RoleModel.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Exclude)({ toClassOnly: true }),
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    tslib_1.__metadata("design:type", Date)
], RoleModel.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => PermissionModel_1.PermissionModel),
    (0, class_transformer_1.Expose)(),
    (0, typeorm_1.OneToMany)(type => PermissionModel_1.PermissionModel, permissionModel => permissionModel.roleModel),
    tslib_1.__metadata("design:type", Array)
], RoleModel.prototype, "permission", void 0);
RoleModel = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ name: 'role' })
], RoleModel);
exports.RoleModel = RoleModel;
//# sourceMappingURL=RoleModel.js.map