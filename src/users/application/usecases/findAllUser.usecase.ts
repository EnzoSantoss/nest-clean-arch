import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/users/infrastructure/database/fake-db/interfaces/repository.interface';

@Injectable()
export default class FindUserUseCase {
  constructor(
    @Inject('teste_repo')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute() {
    this.userRepository.findAll();
  }
}
