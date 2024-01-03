"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const PermissionModel_1 = require("../models/PermissionModel");
let PermissionRepository = class PermissionRepository extends typeorm_1.Repository {
};
PermissionRepository = tslib_1.__decorate([
    (0, typeorm_1.EntityRepository)(PermissionModel_1.PermissionModel)
], PermissionRepository);
exports.PermissionRepository = PermissionRepository;
//# sourceMappingURL=PermissionRepository.js.map