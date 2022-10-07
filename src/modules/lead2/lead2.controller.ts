import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateLeadDto } from '../lead/dto/create-lead.dto';
import { QueryLeadDto } from '../lead/dto/query-lead.dto';
import { Lead2Service } from './lead2.service';
@ApiTags('lead pg')
@Controller('lead-pg')
export class Lead2Controller {
  constructor(private readonly lead2Service: Lead2Service) {}

  @Post()
  create(@Body() createLeadDto: CreateLeadDto) {
    return this.lead2Service.create(createLeadDto);
  }

  @Get()
  findAll(@Query() query: QueryLeadDto) {
    return this.lead2Service.findAll(query?.limit);
  }
}
