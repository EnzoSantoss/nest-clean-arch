/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import { IUserRepository } from '../interfaces/repository.interface';
import { users } from 'src/users/infrastructure/database/fake-db/fake-db';

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
