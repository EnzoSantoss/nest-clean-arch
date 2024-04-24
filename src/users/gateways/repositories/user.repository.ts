/* eslint-disable prettier/prettier */
import { IUserRepository } from '../interfaces/repository.interface';

export class UserRepository implements IUserRepository {
  create(data: any) {
    console.log(data);
  }
  findAll() {
    console.log(`retornando todos os usuarios`);
  }
  findById(id: string) {
    console.log(`retornando todos o usario ${id}`);
  }
}
