"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdmin = void 0;
const tslib_1 = require("tslib");
const AdminModel_1 = require("../../api/models/AdminModel");
const Users_1 = require("../../api/enums/Users");
class CreateAdmin {
    run(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            const users = [{ email: 'admin123@gmail.com', password: 'admin123', roleId: null, mobileNumber: null }];
            for (const u of users) {
                const user = new AdminModel_1.AdminModel();
                user.name = 'Admin';
                user.email = u.email;
                user.password = u.password;
                user.roleId = u.roleId;
                user.createdById = Users_1.SuperAdminId.Id;
                user.mobileNumber = u.mobileNumber;
                user.status = false;
                yield em.save(user);
            }
        });
    }
}
exports.CreateAdmin = CreateAdmin;
//# sourceMappingURL=createAdmin.js.map