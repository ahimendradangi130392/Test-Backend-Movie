"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenRequest = exports.LoginRequest = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class LoginRequest {
}
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], LoginRequest.prototype, "username", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], LoginRequest.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], LoginRequest.prototype, "mobileNumber", void 0);
exports.LoginRequest = LoginRequest;
class RefreshTokenRequest {
}
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], RefreshTokenRequest.prototype, "refreshToken", void 0);
exports.RefreshTokenRequest = RefreshTokenRequest;
//# sourceMappingURL=index.js.map