import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateBookOrder } from '../application/usecases/createBookOrder.usecase';
@Controller('books')
export class BooksController {
  @Inject()
  createBookOrder: CreateBookOrder;

  @Post()
  createBook(@Body() data: any) {
    this.createBookOrder.execute(data);
  }
}
