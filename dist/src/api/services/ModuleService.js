"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Logger_1 = require("../../decorators/Logger");
const ModuleRepository_1 = require("../repositories/ModuleRepository");
let ModuleService = class ModuleService {
    constructor(log, moduleRepository) {
        this.log = log;
        this.moduleRepository = moduleRepository;
    }
    /*  ------------------all module info ---------------  */
    allModuleInfo(res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`get all module info`);
            try {
                return yield this.moduleRepository.find();
            }
            catch (error) {
                return res.status(400).send({ success: false, error: error });
            }
        });
    }
    /*  ------------------module info by id---------------  */
    moduleInfoById(id, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`get module info by id`);
            try {
                return yield this.moduleRepository.findOne(id);
            }
            catch (error) {
                return res.status(400).send({ success: false, error: error });
            }
        });
    }
    /*  ------------------create module buy admin---------------  */
    moduleCreateByAdmin(body, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`create module by admin`);
            try {
                return yield this.moduleRepository.save(body);
            }
            catch (error) {
                return res.status(400).send({ success: false, error: error });
            }
        });
    }
    /*  ------------------update module by admin ---------------  */
    updateModuleByAdmin(body, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Update module by admin`);
            try {
                const moduleData = yield this.moduleRepository.findOne(body === null || body === void 0 ? void 0 : body.id);
                if (moduleData) {
                    moduleData.key = body.key;
                    moduleData.name = body.name;
                    return yield this.moduleRepository.save(moduleData);
                }
                return res.status(400).send({ success: false, error: 'MODULE_NOT_FOUND' });
            }
            catch (error) {
                return res.status(400).send({ success: false, error: error });
            }
        });
    }
    /*  ------------------delete module by admin ---------------  */
    deleteModuleByAdmin(id, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Delete module By admin`);
            try {
                return yield this.moduleRepository.softDelete(id);
            }
            catch (error) {
                return res.status(400).send({ success: false, error: error });
            }
        });
    }
};
ModuleService = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, Logger_1.Logger)(__filename)),
    tslib_1.__param(1, (0, typeorm_typedi_extensions_1.OrmRepository)()),
    tslib_1.__metadata("design:paramtypes", [Object, ModuleRepository_1.ModuleRepository])
], ModuleService);
exports.ModuleService = ModuleService;
//# sourceMappingURL=ModuleService.js.map