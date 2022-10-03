import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductTable1664532898036 implements MigrationInterface {
  name = 'CreateProductTable1664532898036';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "prosucts" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_cb6a7f0784455caf0bf2321b586" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "prosucts"`);
  }
}
