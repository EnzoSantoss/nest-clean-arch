import { Inject, Injectable } from '@nestjs/common';
//import { UserFakeRepository } from '../gateways/repositories/user.repository';
import { IUserRepository } from '../gateways/interfaces/repository.interface';

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
