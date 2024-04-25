/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

//import { IUserRepository } from '../interfaces/repository.interface';
import { IUserRepository } from 'src/users/domain/repositories/user.repository';
import { users } from '../fake-db';

@Injectable()
export class UserFakeRepository implements IUserRepository {
  create(data: any) {
    users.push(data);
  }
  findAll() {
    console.log(users);
  }
  findById(id: number) {
    console.log(users.at(id));
  }
}
