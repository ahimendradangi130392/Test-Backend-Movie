"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionRequest = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class PermissionRequest {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Number)
], PermissionRequest.prototype, "createdById", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], PermissionRequest.prototype, "roleId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], PermissionRequest.prototype, "moduleId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Boolean)
], PermissionRequest.prototype, "isCreate", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Boolean)
], PermissionRequest.prototype, "isView", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Boolean)
], PermissionRequest.prototype, "isEdit", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Boolean)
], PermissionRequest.prototype, "isUpdate", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Boolean)
], PermissionRequest.prototype, "isAll", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Boolean)
], PermissionRequest.prototype, "myView", void 0);
exports.PermissionRequest = PermissionRequest;
//# sourceMappingURL=index.js.map