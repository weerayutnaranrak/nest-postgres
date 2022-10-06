import {MigrationInterface, QueryRunner} from "typeorm";

export class BaseMigration1664879297293 implements MigrationInterface {
    name = 'BaseMigration1664879297293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "leads" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "phone" character varying NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_cd102ed7a9a4ca7d4d8bfeba406" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "prosucts" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_cb6a7f0784455caf0bf2321b586" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "form_transaction" ("id" SERIAL NOT NULL, "product_id" integer, "lead_id" integer, CONSTRAINT "PK_dc9d81d452c922a7563a76e33b1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "form_transaction" ADD CONSTRAINT "FK_b1945288d7ea52d10ea71e380f4" FOREIGN KEY ("product_id") REFERENCES "prosucts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "form_transaction" ADD CONSTRAINT "FK_0491429223b35fe35e6d41241b3" FOREIGN KEY ("lead_id") REFERENCES "leads"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "form_transaction" DROP CONSTRAINT "FK_0491429223b35fe35e6d41241b3"`);
        await queryRunner.query(`ALTER TABLE "form_transaction" DROP CONSTRAINT "FK_b1945288d7ea52d10ea71e380f4"`);
        await queryRunner.query(`DROP TABLE "form_transaction"`);
        await queryRunner.query(`DROP TABLE "prosucts"`);
        await queryRunner.query(`DROP TABLE "leads"`);
    }

}
