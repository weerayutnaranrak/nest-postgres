import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateLeadTable1664528229544 implements MigrationInterface {
  name = 'CreateLeadTable1664528229544';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "leads" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "phone" character varying NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_cd102ed7a9a4ca7d4d8bfeba406" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "leads"`);
  }
}
