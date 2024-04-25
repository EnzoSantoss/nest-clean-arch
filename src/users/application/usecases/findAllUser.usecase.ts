import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/users/domain/repositories/user.repository';

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
