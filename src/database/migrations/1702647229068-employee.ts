import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class employee1702647229068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
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
                    name: 'title',
                    type: 'varchar',
                    isPrimary: false,
                    isNullable: true,
                    length: '255',
                }, {
                    name: 'email',
                    type: 'varchar',
                    length: '255',
                    isPrimary: false,
                    isNullable: true,
                    isUnique: true,
                }, {
                    name: 'password',
                    length: '255',
                    type: 'varchar',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'publishing_year',
                    length: '255',
                    type: 'varchar',
                    isNullable: true,
                    isPrimary: false,
                }, 
                {
                    name: 'file',
                    type: 'varchar', 
                    isPrimary: false,
                    isNullable: true,
                    length: '255'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    isPrimary: false,
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP',
                }, {
                    name: 'updated_at',
                    type: 'timestamp',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'deleted_at',
                    type: 'timestamp',
                    isPrimary: false,
                    isNullable: true,
                },
            ],
        });
        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
