import { Module } from '@nestjs/common';
import { FormTransaction2Service } from './form-transaction2.service';
import { FormTransaction2Controller } from './form-transaction2.controller';

@Module({
  controllers: [FormTransaction2Controller],
  providers: [FormTransaction2Service],
})
export class FormTransaction2Module {}
