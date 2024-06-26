import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/users/domain/repositories/user.repository';
import { UserEntity } from 'src/users/domain/entities/user.entity';

@Injectable()
export default class CreateUserUseCase {
  constructor(
    @Inject('typeorm_repo')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(input: any) {
    const usuario = new UserEntity(input.name, input.age);

    usuario.create();

    await this.userRepository.create(usuario);
  }
}
