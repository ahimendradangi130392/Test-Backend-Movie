"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const RoleModel_1 = require("../models/RoleModel");
let RoleRepository = class RoleRepository extends typeorm_1.Repository {
    getRoleInfoById(id, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const qb = this.createQueryBuilder('role')
                .leftJoinAndSelect('role.permission', 'permission')
                .andWhere('role.id =:id', { id: id });
            return qb.getOne();
        });
    }
};
RoleRepository = tslib_1.__decorate([
    (0, typeorm_1.EntityRepository)(RoleModel_1.RoleModel)
], RoleRepository);
exports.RoleRepository = RoleRepository;
//# sourceMappingURL=RoleRepository.js.map