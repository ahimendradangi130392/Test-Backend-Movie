"use strict";
var AdminModel_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModel = void 0;
const tslib_1 = require("tslib");
const bcrypt = tslib_1.__importStar(require("bcrypt"));
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let AdminModel = AdminModel_1 = class AdminModel extends typeorm_1.BaseEntity {
    static hashPassword(password) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    return reject(err);
                }
                resolve(hash);
            });
        });
    }
    static comparePassword(user, password) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                resolve(res === true);
            });
        });
    }
    hashPassword() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.password = yield AdminModel_1.hashPassword(this.password);
        });
    }
    // HOOKS
    validate() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield (0, class_validator_1.validateOrReject)(this);
        });
    }
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], AdminModel.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    tslib_1.__metadata("design:type", String)
], AdminModel.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ name: 'full_name' }),
    tslib_1.__metadata("design:type", String)
], AdminModel.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: 'role_id' }),
    tslib_1.__metadata("design:type", Number)
], AdminModel.prototype, "roleId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ name: 'created_by_id' }),
    tslib_1.__metadata("design:type", Number)
], AdminModel.prototype, "createdById", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: 'mobile_number' }),
    tslib_1.__metadata("design:type", String)
], AdminModel.prototype, "mobileNumber", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ name: 'status' }),
    tslib_1.__metadata("design:type", Boolean)
], AdminModel.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, typeorm_1.Column)({ name: 'email', length: 255 }),
    tslib_1.__metadata("design:type", String)
], AdminModel.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, class_transformer_1.Exclude)({ toClassOnly: true }),
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    tslib_1.__metadata("design:type", Date)
], AdminModel.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Exclude)({ toClassOnly: true }),
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    tslib_1.__metadata("design:type", Date)
], AdminModel.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Exclude)({ toClassOnly: true }),
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    tslib_1.__metadata("design:type", Date)
], AdminModel.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.BeforeInsert)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AdminModel.prototype, "hashPassword", null);
tslib_1.__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AdminModel.prototype, "validate", null);
AdminModel = AdminModel_1 = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ name: 'admin' }),
    (0, typeorm_1.Unique)(['email'])
], AdminModel);
exports.AdminModel = AdminModel;
//# sourceMappingURL=AdminModel.js.map