"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permission1698743181870 = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class permission1698743181870 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'permission',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isNullable: false,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    }, {
                        name: 'created_by_id',
                        type: 'int',
                        isPrimary: false,
                        isNullable: false,
                    }, {
                        name: 'role_id',
                        type: 'int',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'module_id',
                        type: 'int',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'is_create',
                        type: 'boolean',
                        isPrimary: false,
                        isNullable: true,
                        default: false
                    }, {
                        name: 'my_view',
                        type: 'boolean',
                        isPrimary: false,
                        isNullable: true,
                        default: false
                    }, {
                        name: 'is_view',
                        type: 'boolean',
                        isPrimary: false,
                        isNullable: true,
                        default: false
                    }, {
                        name: 'is_edit',
                        type: 'boolean',
                        isNullable: true,
                        isPrimary: false,
                        default: false
                    }, {
                        name: 'is_update',
                        type: 'boolean',
                        isNullable: true,
                        isPrimary: false,
                        default: false
                    }, {
                        name: 'is_all',
                        type: 'boolean',
                        isPrimary: false,
                        isNullable: true,
                        default: false
                    }, {
                        name: 'created_at',
                        type: 'timestamp',
                        isPrimary: false,
                        isNullable: false,
                        default: 'CURRENT_TIMESTAMP',
                    }, {
                        name: 'updated_at',
                        type: 'timestamp',
                        isPrimary: false,
                        isNullable: false,
                    }, {
                        name: 'deleted_at',
                        type: 'timestamp',
                        isPrimary: false,
                        isNullable: true,
                    },
                ]
            });
            yield queryRunner.createTable(table);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('permission');
        });
    }
}
exports.permission1698743181870 = permission1698743181870;
//# sourceMappingURL=1698743181870-permission.js.map