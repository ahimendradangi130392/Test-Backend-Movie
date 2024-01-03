"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const ModuleModel_1 = require("../models/ModuleModel");
let ModuleRepository = class ModuleRepository extends typeorm_1.Repository {
};
ModuleRepository = tslib_1.__decorate([
    (0, typeorm_1.EntityRepository)(ModuleModel_1.ModuleModel)
], ModuleRepository);
exports.ModuleRepository = ModuleRepository;
//# sourceMappingURL=ModuleRepository.js.map