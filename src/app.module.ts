import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostgresModule } from './database/postgres.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ConfigModule.forRoot({}), PostgresModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
