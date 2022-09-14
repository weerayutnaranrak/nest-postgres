import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RedisService } from 'src/redis/redis.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import UserEntity from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private redisService: RedisService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.usersRepository.save(createUserDto);
    await this.redisService.del('user');
    return user;
  }

  async findAll() {
    let user = await this.redisService.get('user');
    if (!user) {
      console.log('loging ...');
      user = await this.usersRepository.find();
      await this.redisService.set('user', user);
    }

    return user;
  }

  async findOne(id: string) {
    const user = await this.usersRepository.find({
      where: {
        id: +id,
      },
    });
    return user[0];
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.update(id, updateUserDto);
    await this.redisService.del('user');
    return user;
  }
  async remove(id: string) {
    const user = await this.usersRepository.delete(id);
    await this.redisService.del('user');
    return user;
  }
}
