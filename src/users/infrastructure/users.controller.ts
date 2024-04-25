import { Body, Controller, Get, Post, Inject } from '@nestjs/common';

import CreateUserUseCase from '../application/usecases/createUser.usecase';
import FindUserUseCase from '../application/usecases/findAllUser.usecase';

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

  @Post()
  createUserTest(@Body() data: any) {
    this.createUserUseCase.execute(data);
  }

  @Get()
  getAllUsers() {
    this.findUserUseCase.execute();
  }
}
