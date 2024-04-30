import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { Book } from './database/type-orm/book.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [BooksController],
  imports: [TypeOrmModule.forFeature([Book])],
})
export class BooksModule {}
