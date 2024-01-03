"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionAdmin = void 0;
const tslib_1 = require("tslib");
const PermissionModel_1 = require("../../api/models/PermissionModel");
const Users_1 = require("../../api/enums/Users");
class PermissionAdmin {
    run(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            const users = [{ roleId: null }];
            for (const u of users) {
                const user = new PermissionModel_1.PermissionModel();
                user.createdById = Users_1.SuperAdminId.Id;
                user.moduleId = null;
                user.roleId = u.roleId;
                user.isCreate = false;
                user.myView = false;
                user.isView = false;
                user.isEdit = false;
                user.isUpdate = false;
                user.isAll = true;
                yield em.save(user);
            }
        });
    }
}
exports.PermissionAdmin = PermissionAdmin;
//# sourceMappingURL=permissionAdmin.js.map