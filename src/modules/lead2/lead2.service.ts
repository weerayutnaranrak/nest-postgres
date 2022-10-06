import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { InjectClient } from 'nest-postgres';
import { CreateLeadDto } from '../lead/dto/create-lead.dto';
@Injectable()
export class Lead2Service {
  constructor(@InjectClient() private readonly pg: Client) {}
  async create(createLeadDto: CreateLeadDto): Promise<any> {
    const lead = await this.pg.query(
      'INSERT INTO leads (first_name, last_name, status, phone)  VALUES ($1, $2, $3, $4) RETURNING *',
      [
        createLeadDto.firstName,
        createLeadDto.lastName,
        createLeadDto.status,
        createLeadDto.phone,
      ],
    );
    return lead.rows;
  }

  async findAll(limit = 10): Promise<any> {
    const leads = await this.pg.query(`SELECT * FROM leads LIMIT ${limit}`);
    return leads.rows;
  }
}
