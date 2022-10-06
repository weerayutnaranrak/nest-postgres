import { Injectable } from '@nestjs/common';
import { InjectClient } from 'nest-postgres';
import { Client } from 'pg';
import { CreateFormTransactionDto } from '../form-transaction/dto/create-form-transaction.dto';

@Injectable()
export class FormTransaction2Service {
  constructor(@InjectClient() private readonly pg: Client) {}
  async create(
    createFormTarnsactionDto: CreateFormTransactionDto,
  ): Promise<any> {
    const formTransaction = await this.pg.query(
      'INSERT INTO form_transaction (lead_id, product_id)  VALUES ($1, $2) RETURNING *',
      [createFormTarnsactionDto.lead_id, createFormTarnsactionDto.product_id],
    );
    return formTransaction.rows;
  }

  async findAll(limit = 10): Promise<any> {
    const formTransaction = await this.pg.query(
      `SELECT * FROM form_transaction LEFT JOIN leads ON form_transaction.lead_id = leads.id LEFT JOIN prosucts ON form_transaction.product_id = prosucts.id  LIMIT ${limit}`,
    );
    return formTransaction.rows;
  }
}
