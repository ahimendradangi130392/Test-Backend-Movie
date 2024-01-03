"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleModel = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let ModuleModel = class ModuleModel extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], ModuleModel.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ name: 'created_by_id' }),
    tslib_1.__metadata("design:type", Number)
], ModuleModel.prototype, "createdById", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ name: 'key' }),
    tslib_1.__metadata("design:type", String)
], ModuleModel.prototype, "key", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ name: 'name' }),
    tslib_1.__metadata("design:type", String)
], ModuleModel.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, class_transformer_1.Exclude)({ toClassOnly: true }),
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    tslib_1.__metadata("design:type", Date)
], ModuleModel.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Exclude)({ toClassOnly: true }),
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    tslib_1.__metadata("design:type", Date)
], ModuleModel.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Exclude)({ toClassOnly: true }),
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    tslib_1.__metadata("design:type", Date)
], ModuleModel.prototype, "updatedAt", void 0);
ModuleModel = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ name: 'module' })
], ModuleModel);
exports.ModuleModel = ModuleModel;
//# sourceMappingURL=ModuleModel.js.map