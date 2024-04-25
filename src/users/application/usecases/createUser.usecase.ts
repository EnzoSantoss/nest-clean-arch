import { Inject, Injectable } from '@nestjs/common';
//import { UserFakeRepository } from '../gateways/repositories/user.repository';
import { IUserRepository } from 'src/users/infrastructure/database/fake-db/interfaces/repository.interface';

@Injectable()
export default class CreateUserUseCase {
  constructor(
    @Inject('teste_repo')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(input: any) {
    console.log(input);

    this.userRepository.create(input);
  }
}
