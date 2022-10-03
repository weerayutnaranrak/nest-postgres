import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFormTransactionTable1664766377729
  implements MigrationInterface
{
  name = 'CreateFormTransactionTable1664766377729';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "form_transaction" ("id" SERIAL NOT NULL, "productId" integer, "leadId" integer, CONSTRAINT "PK_dc9d81d452c922a7563a76e33b1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "form_transaction" ADD CONSTRAINT "FK_e9832dd12670458db24c4d57e6a" FOREIGN KEY ("productId") REFERENCES "prosucts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "form_transaction" ADD CONSTRAINT "FK_a81dbec84bf82d8d3189eb4ebaf" FOREIGN KEY ("leadId") REFERENCES "leads"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "form_transaction" DROP CONSTRAINT "FK_a81dbec84bf82d8d3189eb4ebaf"`,
    );
    await queryRunner.query(
      `ALTER TABLE "form_transaction" DROP CONSTRAINT "FK_e9832dd12670458db24c4d57e6a"`,
    );
    await queryRunner.query(`DROP TABLE "form_transaction"`);
  }
}
