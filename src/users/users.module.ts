import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserFakeRepository } from './gateways/repositories/user.repository';
import CreateUserUseCase from './usecases/createUser.usecase';
import FindUserUseCase from './usecases/findAllUser.usecase';

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
