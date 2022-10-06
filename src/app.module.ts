import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostgresModule } from './database/postgres.module';
import { PostgresModule as Postgres } from 'nest-postgres';
import { LeadModule } from './modules/lead/lead.module';
import { ProductModule } from './modules/product/product.module';
import { FormTransactionModule } from './modules/form-transaction/form-transaction.module';
import { Lead2Module } from './modules/lead2/lead2.module';
import { FormTransaction2Module } from './modules/form-transaction2/form-transaction2.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    PostgresModule,
    Postgres.forRoot({
      connectionString:
        'postgresql://postgres:XWs9jXUNEOtxRlAV@db.fjoyvwxjghfxhzyytbuy.supabase.co:5432/postgres',
      // or
      // host: 'localhost',
      // database: 'nest',
      // password: 'pass123',
      // user: 'postgres',
      // port: 5432,
    }),
    LeadModule,
    ProductModule,
    FormTransactionModule,
    Lead2Module,
    FormTransaction2Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
