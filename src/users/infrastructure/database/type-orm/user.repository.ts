/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from 'src/users/domain/repositories/user.repository';
import { User } from './user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UserTypeOrmRepository implements IUserRepository {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(data: any) {
    const newUser = new User();

    newUser.user_id = String(Date.now());
    newUser.name = 'teste';
    newUser.age = 888;
    newUser.createdAt = new Date();
  }
  findAll() {}
  findById(id: number) {}
}