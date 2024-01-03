"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Logger_1 = require("../../decorators/Logger");
const AdminModel_1 = require("../models/AdminModel");
const AdminRepository_1 = require("../repositories/AdminRepository");
let AdminService = class AdminService {
    constructor(log, adminRepository) {
        this.log = log;
        this.adminRepository = adminRepository;
    }
    /*  ------------------user and admin login with email and password---------------  */
    getAdminInformation(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`get admin and user information by id`);
            return yield this.adminRepository.findOne(id);
        });
    }
    /*  ------------------ all user info ---------------  */
    allUserInfo(params, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`all user info`);
            return yield this.adminRepository.allUserInfo(params);
        });
    }
    /*  ------------------create user by admin---------------  */
    createUser(body, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`create user by admin`);
            try {
                const hashPassword = yield AdminModel_1.AdminModel.hashPassword(body.password);
                body.password = hashPassword;
                return yield this.adminRepository.save(body);
            }
            catch (error) {
                return res.status(400).send({ success: false, error: error });
            }
        });
    }
    /*  ------------------ user and admin info by id---------------  */
    userInfoById(id, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`user info by id`);
            try {
                return yield this.adminRepository.findOne(id);
            }
            catch (error) {
                return res.status(400).send({ success: false, error: error });
            }
        });
    }
    /*  ------------------update user and  admin ---------------  */
    updateUser(updateBody, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Update admin`);
            try {
                const userData = yield this.adminRepository.findOne(updateBody === null || updateBody === void 0 ? void 0 : updateBody.id);
                if (userData) {
                    userData.name = updateBody.name;
                    userData.status = updateBody.status;
                    return yield this.adminRepository.save(userData);
                }
                return res.status(400).send({ success: false, error: 'USER_NOT_FOUND  ' });
            }
            catch (error) {
                return res.status(400).send({ success: false });
            }
        });
    }
    /*  ------------------delete user and  admin ---------------  */
    deleteUser(id, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Delete user Information By Id`);
            try {
                return yield this.adminRepository.softDelete(id);
            }
            catch (error) {
                return res.status(400).send({ success: false });
            }
        });
    }
};
AdminService = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, Logger_1.Logger)(__filename)),
    tslib_1.__param(1, (0, typeorm_typedi_extensions_1.OrmRepository)()),
    tslib_1.__metadata("design:paramtypes", [Object, AdminRepository_1.AdminRepository])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=AdminService.js.map