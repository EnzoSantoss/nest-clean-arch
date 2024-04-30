import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserFakeRepository } from './database/fake-db/repositories/user.repository';
import CreateUserUseCase from '../application/usecases/createUser.usecase';
import FindUserUseCase from '../application/usecases/findAllUser.usecase';
import { User } from './database/type-orm/user.model';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserTypeOrmRepository } from './database/type-orm/user.repository';
//import { DataSource } from 'typeorm';

@Module({
  controllers: [UsersController],
  providers: [
    UserFakeRepository,
    CreateUserUseCase,
    FindUserUseCase,
    UserTypeOrmRepository,

    {
      provide: 'teste_repo',
      useExisting: UserFakeRepository,
    },

    {
      provide: 'typeorm_repo',
      useExisting: UserTypeOrmRepository,
    },
  ],

  imports: [TypeOrmModule.forFeature([User])],

  exports: [UserTypeOrmRepository],
})
export class UsersModule {
  //constructor(private dataSource: DataSource) {}
}
