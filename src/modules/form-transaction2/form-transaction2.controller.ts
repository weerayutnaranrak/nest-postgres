import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFormTransactionDto } from '../form-transaction/dto/create-form-transaction.dto';
import { QueryFormTransactionDto } from '../form-transaction/dto/query-form-transaction.dto';
import { FormTransaction2Service } from './form-transaction2.service';
@ApiTags('form-transaction2')
@Controller('form-transaction2')
export class FormTransaction2Controller {
  constructor(
    private readonly formTransaction2Service: FormTransaction2Service,
  ) {}

  @Post()
  create(@Body() createFormTransactionDto: CreateFormTransactionDto) {
    return this.formTransaction2Service.create(createFormTransactionDto);
  }

  @Get()
  findAll(@Query() query: QueryFormTransactionDto) {
    return this.formTransaction2Service.findAll(query?.limit);
  }
}
