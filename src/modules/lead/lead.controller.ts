import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LeadService } from './lead.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Lead')
@Controller('lead')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Post()
  async create(@Body() createLeadDto: CreateLeadDto) {
    return await this.leadService.create(createLeadDto);
  }

  @Get()
  async findAll() {
    return this.leadService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.leadService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLeadDto: UpdateLeadDto) {
    return await this.leadService.update(id, updateLeadDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.leadService.remove(id);
  }
}
