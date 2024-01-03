"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleResponse = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class RoleResponse {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], RoleResponse.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], RoleResponse.prototype, "createdById", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], RoleResponse.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Date)
], RoleResponse.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Date)
], RoleResponse.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Date)
], RoleResponse.prototype, "updatedAt", void 0);
exports.RoleResponse = RoleResponse;
//# sourceMappingURL=index.js.map