"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role1698743158882 = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class role1698743158882 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'role',
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
                        name: 'name',
                        type: 'varchar',
                        isPrimary: false,
                        isNullable: false,
                        length: '255',
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
            yield queryRunner.dropTable('role');
        });
    }
}
exports.role1698743158882 = role1698743158882;
//# sourceMappingURL=1698743158882-role.js.map