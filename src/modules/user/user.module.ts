import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { RedisModule } from 'src/redis/redis.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './user.entity';
import { RedisService } from 'src/redis/redis.service';

@Module({
  imports: [RedisModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, RedisService],
})
export class UserModule {}
