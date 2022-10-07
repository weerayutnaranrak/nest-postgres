import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFormTransactionDto } from './dto/create-form-transaction.dto';
import { QueryFormTransactionDto } from './dto/query-form-transaction.dto';
import { UpdateFormTransactionDto } from './dto/update-form-transaction.dto';
import { FormTransactionService } from './form-transaction.service';

@ApiTags('form-transaction-typeorm')
@Controller('form-transaction-typeorm')
export class FormTransactionController {
  constructor(
    private readonly formTransactionService: FormTransactionService,
  ) {}

  @Post()
  async create(@Body() createFormTransationDto: CreateFormTransactionDto) {
    return await this.formTransactionService.create(createFormTransationDto);
  }

  @Get()
  async findAll(@Query('limit') query: QueryFormTransactionDto) {
    return this.formTransactionService.findAll(query?.limit);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.formTransactionService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,

    @Body() updateFormTransactionDto: UpdateFormTransactionDto,
  ) {
    return await this.formTransactionService.update(
      id,
      updateFormTransactionDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.formTransactionService.remove(id);
  }
}
