import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/users/domain/repositories/user.repository';
import { UserEntity } from 'src/users/domain/entities/user.entity';

@Injectable()
export default class CreateUserUseCase {
  constructor(
    @Inject('teste_repo')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(input: any) {
    console.log(input);

    const usuario = new UserEntity(input.name, input.age);

    usuario.create();

    this.userRepository.create(usuario);
  }
}
