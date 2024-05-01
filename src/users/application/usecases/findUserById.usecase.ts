import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/users/domain/repositories/user.repository';

@Injectable()
export class FindUserByIdUseCase {
  constructor(
    @Inject('typeorm_repo')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(input: string) {
    return await this.userRepository.findById(input);
  }
}
