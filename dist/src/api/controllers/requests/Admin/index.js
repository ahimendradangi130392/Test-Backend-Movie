"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminReq = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class AdminReq {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], AdminReq.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], AdminReq.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], AdminReq.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(10),
    (0, class_validator_1.MaxLength)(10),
    tslib_1.__metadata("design:type", String)
], AdminReq.prototype, "mobileNumber", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], AdminReq.prototype, "roleId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Number)
], AdminReq.prototype, "createdById", void 0);
exports.AdminReq = AdminReq;
//# sourceMappingURL=index.js.map