import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostgresModule } from './database/postgres.module';

import { LeadModule } from './modules/lead/lead.module';
import { ProductModule } from './modules/product/product.module';
import { FormTransactionModule } from './modules/form-transaction/form-transaction.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    PostgresModule,
    LeadModule,
    ProductModule,
    FormTransactionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
