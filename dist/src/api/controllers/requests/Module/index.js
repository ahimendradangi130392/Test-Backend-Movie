"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleRequest = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class ModuleRequest {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Number)
], ModuleRequest.prototype, "createdById", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], ModuleRequest.prototype, "key", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], ModuleRequest.prototype, "name", void 0);
exports.ModuleRequest = ModuleRequest;
//# sourceMappingURL=index.js.map