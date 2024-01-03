"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponse = exports.BaseUser = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const Users_1 = require("../../../enums/Users");
class BaseUser {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], BaseUser.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], BaseUser.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Boolean)
], BaseUser.prototype, "isEnabled", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], BaseUser.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(Users_1.UserRoles),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], BaseUser.prototype, "role", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Date)
], BaseUser.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Date)
], BaseUser.prototype, "updatedAt", void 0);
exports.BaseUser = BaseUser;
class UserResponse extends BaseUser {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], UserResponse.prototype, "id", void 0);
exports.UserResponse = UserResponse;
//# sourceMappingURL=index.js.map