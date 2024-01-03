"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleAdmin = void 0;
const tslib_1 = require("tslib");
const Users_1 = require("../../api/enums/Users");
const RoleModel_1 = require("../../api/models/RoleModel");
const PermissionModel_1 = require("../../api/models/PermissionModel");
const ModuleModel_1 = require("../../api/models/ModuleModel");
class roleAdmin {
    constructor() {
        this.saveModuleData = (em, data) => {
            return new Promise(function (resolve, reject) {
                console.log(data, ':::::::::::::::::::::::');
                const response = em.save(data);
                resolve(response);
            });
        };
    }
    run(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            const users = [{ name: "admin", isAll: true, myView: false }, { name: "projectManger", isAll: false, myView: true }, { name: "purchaseManager", isAll: false, myView: true }, { name: "siteManager", isAll: false, myView: true }, { name: "superVisior", isAll: false, myView: true }, { name: "vendor", isAll: false, myView: true }];
            for (const u of users) {
                const user = new RoleModel_1.RoleModel();
                user.createdById = Users_1.SuperAdminId.Id;
                user.name = u.name;
                const roleData = yield em.save(user);
                const permissionData = new PermissionModel_1.PermissionModel();
                const moduleData = yield em.find(ModuleModel_1.ModuleModel);
                Promise.all(moduleData.map((ele) => {
                    permissionData.moduleId = ele.id;
                    permissionData.createdById = Users_1.SuperAdminId.Id;
                    permissionData.roleId = roleData.id;
                    permissionData.isAll = u.isAll;
                    permissionData.myView = u.myView;
                    console.log(permissionData, "PPPPPPPPPPPPP");
                    this.saveModuleData(em, permissionData);
                    //  em.save(permissionData);
                }));
            }
        });
    }
}
exports.roleAdmin = roleAdmin;
//# sourceMappingURL=roleAdmin.js.map