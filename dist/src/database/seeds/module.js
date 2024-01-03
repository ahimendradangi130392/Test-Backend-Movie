"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
const tslib_1 = require("tslib");
const Users_1 = require("../../api/enums/Users");
const ModuleModel_1 = require("../../api/models/ModuleModel");
class Module {
    run(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            const users = [{ key: "abc", "name": "abc" }, { key: "xyz", name: "xyz" }];
            for (const u of users) {
                const user = new ModuleModel_1.ModuleModel();
                user.createdById = Users_1.SuperAdminId.Id;
                user.key = u.key;
                user.name = u.name;
                yield em.save(user);
            }
        });
    }
}
exports.Module = Module;
//# sourceMappingURL=module.js.map