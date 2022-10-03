import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import LeadEntity from './lead.entity';

@Injectable()
export class LeadService {
  constructor(
    @InjectRepository(LeadEntity)
    private leadRepo: Repository<LeadEntity>,
  ) {}

  async create(createLeadDto: CreateLeadDto) {
    const lead = await this.leadRepo.save(createLeadDto);
    return lead;
  }

  async findAll() {
    const lead = await this.leadRepo.find();
    return lead;
  }

  async findOne(id: string) {
    const lead = await this.leadRepo.findOne(id);
    return lead;
  }

  async update(id: string, updateLeadDto: UpdateLeadDto) {
    const lead = await this.leadRepo.update(id, updateLeadDto);
    return lead;
  }

  async remove(id: string) {
    const lead = await this.leadRepo.delete(id);
    return lead;
  }
}
