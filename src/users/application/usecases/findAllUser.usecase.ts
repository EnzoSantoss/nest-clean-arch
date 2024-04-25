import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/users/domain/repositories/user.repository';

@Injectable()
export default class FindUserUseCase {
  constructor(
    @Inject('typeorm_repo')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute() {
    return await this.userRepository.findAll();
  }
}
