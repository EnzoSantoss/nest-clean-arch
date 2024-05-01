import { Body, Controller, Get, Post, Inject, Param } from '@nestjs/common';

import CreateUserUseCase from '../application/usecases/createUser.usecase';
import FindUserUseCase from '../application/usecases/findAllUser.usecase';
import { FindUserByIdUseCase } from '../application/usecases/findUserById.usecase';

@Controller('users')
export class UsersController {
  // constructor(
  //   private readonly createUserUseCase: CreateUserUseCase,
  //   private readonly findUserUseCase: FindUserUseCase,
  // ) {}
  @Inject()
  private readonly createUserUseCase: CreateUserUseCase;

  @Inject()
  private readonly findUserUseCase: FindUserUseCase;

  @Inject()
  private readonly findUserByIdUseCase: FindUserByIdUseCase;

  @Post()
  createUserTest(@Body() data: any) {
    this.createUserUseCase.execute(data);
  }

  @Get()
  getAllUsers() {
    return this.findUserUseCase.execute();
  }

  @Get('/:id')
  getUserById(@Param('id') user_id: string) {
    return this.findUserByIdUseCase.execute(user_id);
  }
}
