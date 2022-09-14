import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateTableUser1663147544740 implements MigrationInterface {
    name = 'UpdateTableUser1663147544740'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "test"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "test" character varying NOT NULL`);
    }

}
