"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const AdminModel_1 = require("../models/AdminModel");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
let AdminRepository = class AdminRepository extends typeorm_1.Repository {
    allUserInfo(filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const qb = this.createQueryBuilder('admin');
            if (filter.q) {
                qb.andWhere(`admin.full_name LIKE:name`, { name: `${filter.q}%` });
                qb.orWhere(`admin.email LIKe:email`, { email: `${filter.q}%` });
                qb.orWhere(`admin.mobile_number LIKE:mobileNumber`, { mobileNumber: `${filter.q}%` });
            }
            if ((filter === null || filter === void 0 ? void 0 : filter.sortField) && (filter === null || filter === void 0 ? void 0 : filter.sortValue))
                qb.orderBy(`admin.${filter.sortField}`, filter.sortValue);
            else
                qb.orderBy('admin.created_at', 'DESC');
            const page = !filter.page ? 1 : Number(filter.page);
            const limit = !filter.limit ? 10 : Number(filter.limit);
            return (0, nestjs_typeorm_paginate_1.paginate)(qb, { page, limit });
        });
    }
};
AdminRepository = tslib_1.__decorate([
    (0, typeorm_1.EntityRepository)(AdminModel_1.AdminModel)
], AdminRepository);
exports.AdminRepository = AdminRepository;
//# sourceMappingURL=AdminRepository.js.map