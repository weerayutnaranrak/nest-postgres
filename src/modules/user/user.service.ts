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
  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user: UserEntity = await this.usersRepository.save(createUserDto);
    await this.redisService.del('user');
    return user;
  }

  async findAll(): Promise<UserEntity[]> {
    let user = (await this.redisService.get('user')) as UserEntity[];
    if (!user) {
      console.log('loging ...');
      user = await this.usersRepository.find();
      await this.redisService.set('user', user);
    }

    return user;
  }

  async findOne(id: string): Promise<UserEntity> {
    const user = await this.usersRepository.find({
      where: {
        id: +id,
      },
    });
    return user[0];
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    await this.usersRepository.update(id, updateUserDto);
    await this.redisService.del('user');

    return new UserEntity();
  }
  async remove(id: string): Promise<UserEntity> {
    await this.usersRepository.delete(id);
    await this.redisService.del('user');
    return new UserEntity();
  }
}
