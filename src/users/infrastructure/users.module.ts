import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserFakeRepository } from './repositories/user.repository';
import CreateUserUseCase from '../application/usecases/createUser.usecase';
import FindUserUseCase from '../application/usecases/findAllUser.usecase';

@Module({
  controllers: [UsersController],
  providers: [
    UserFakeRepository,
    CreateUserUseCase,
    FindUserUseCase,

    {
      provide: 'teste_repo',
      useExisting: UserFakeRepository,
    },
  ],
})
export class UsersModule {}
