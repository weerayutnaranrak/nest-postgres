import { Module } from '@nestjs/common';
import { FormTransactionService } from './form-transaction.service';
import { FormTransactionController } from './form-transaction.controller';
import LeadEntity from '../lead/lead.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import FormTransationEntity from './form-transaction.entity';
import ProductEntity from '../product/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([LeadEntity, FormTransationEntity, ProductEntity]),
  ],
  controllers: [FormTransactionController],
  providers: [FormTransactionService],
})
export class FormTransactionModule {}
