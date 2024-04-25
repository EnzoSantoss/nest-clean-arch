import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateUserUseCase from './usecases/createUser.usecase';
import FindUserUseCase from './usecases/findAllUser.usecase';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findUserUseCase: FindUserUseCase,
  ) {}
  @Post()
  createUserTest(@Body() data: any) {
    this.createUserUseCase.execute(data);
  }

  @Get()
  getAllUsers() {
    this.findUserUseCase.execute();
  }
}
