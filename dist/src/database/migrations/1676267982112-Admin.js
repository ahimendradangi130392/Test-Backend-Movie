"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin1676267982112 = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class Admin1676267982112 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'admin',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isNullable: false,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    }, {
                        name: 'full_name',
                        type: 'varchar',
                        isPrimary: false,
                        isNullable: false,
                        length: '255',
                    }, {
                        name: 'email',
                        type: 'varchar',
                        length: '255',
                        isPrimary: false,
                        isNullable: false,
                        isUnique: true,
                    }, {
                        name: 'password',
                        length: '255',
                        type: 'varchar',
                        isPrimary: false,
                        isNullable: false,
                    }, {
                        name: 'mobile_number',
                        length: '255',
                        type: 'varchar',
                        isNullable: true,
                        isPrimary: false,
                    }, {
                        name: 'role_id',
                        type: 'int',
                        isNullable: true,
                        isPrimary: false,
                    }, {
                        name: 'created_by_id',
                        type: 'int',
                        isPrimary: false,
                        isNullable: false,
                    }, {
                        name: 'status',
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
                ],
            });
            yield queryRunner.createTable(table);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('admin');
        });
    }
}
exports.Admin1676267982112 = Admin1676267982112;
//# sourceMappingURL=1676267982112-Admin.js.map