import { Module } from '@nestjs/common';
import { Lead2Service } from './lead2.service';
import { Lead2Controller } from './lead2.controller';

@Module({
  controllers: [Lead2Controller],
  providers: [Lead2Service],
})
export class Lead2Module {}
