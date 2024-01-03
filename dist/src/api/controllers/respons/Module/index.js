"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleResponse = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class ModuleResponse {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], ModuleResponse.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], ModuleResponse.prototype, "createdById", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], ModuleResponse.prototype, "key", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], ModuleResponse.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Date)
], ModuleResponse.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Date)
], ModuleResponse.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Date)
], ModuleResponse.prototype, "updatedAt", void 0);
exports.ModuleResponse = ModuleResponse;
//# sourceMappingURL=index.js.map