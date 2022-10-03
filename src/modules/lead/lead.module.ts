import { Module } from '@nestjs/common';
import { LeadService } from './lead.service';
import { LeadController } from './lead.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import LeadEntity from './lead.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LeadEntity])],
  controllers: [LeadController],
  providers: [LeadService],
})
export class LeadModule {}
